"use client";
import { Button, Empty } from "antd";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { decrement, increment } from "@/redux/feature/counter/counterSlice";
import { useGetAllCartsQuery } from "@/redux/api/cartApi";
import { getUserInfo } from "@/service/authentication.service";
import { useGetSingleUserQuery } from "@/redux/api/userApi";

const CartPage = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const { email } = getUserInfo() as any;
  const { data } = useGetSingleUserQuery(email);
  const { data: cartAllData } = useGetAllCartsQuery({
    limit: 100,
    page: 1,
    userId: data?.id,
  });
  const carts = cartAllData?.carts;
  const meta = cartAllData?.meta;
  return (
    <div className="bg-white">
      <div className="grid gap-4 grid-cols-12 mt-12 items-center">
        <div className="col-span-8 min-h-full border">
          {/* showing cart data  */}
          <div>
            {carts?.length > 0 ? (
              carts?.map((cart:any) => (
                <div
                  key={cart?.id}
                  className="flex justify-between items-center px-3 py-4 bg-gray-50 rounded"
                >
                  {/* image(user) */}
                  <div className="h-20 w-20 rounded-full bg-gray-400">
                    <Image
                      src={cart?.service?.imageUrl}
                      alt="Service Image"
                      width={500}
                      height={500}
                      className="object-center w-full h-full rounded-full"
                      priority
                    />
                  </div>
                  <h3>{cart?.service?.name}</h3>
                  <p>$ {cart?.price}</p>
                  <p>{cart?.quantity}</p>
                  {/* quantity update button */}
                  <div className="flex gap-3 bg-gray-100 border py-1 px-2 rounded justify-center items-center">
                    <Button
                      onClick={() => dispatch(decrement())}
                      className="outline-none border-none"
                    >
                      -
                    </Button>
                    <h1 className="text-center">{count}</h1>
                    <Button
                      onClick={() => dispatch(increment())}
                      className="outline-none border-none"
                    >
                      +
                    </Button>
                  </div>
                  <h1>$ {cart?.price}</h1>
                </div>
              ))
            ) : (
              <Empty
                style={{
                  margin: "20px",
                }}
                description="No cart data found yet!!"
              />
            )}
          </div>
        </div>
        {/* cart details (amount) */}
        <div className="col-span-4 shadow-2xl min-h-full rounded-xl">
          <div className="border p-10 space-y-5">
            <h1 className="text-center text-2xl font-bold">Cart Totals</h1>
            <hr />
            <div className="">
              <p className="text-xl font-medium text-gray-500">
                Subtotal : <span className="ml-8">$ 500</span>
              </p>
              <p className="text-2xl font-semibold ">
                Total :<span className="ml-8">$ 500</span>
              </p>
            </div>
            <Button block type="primary">
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
