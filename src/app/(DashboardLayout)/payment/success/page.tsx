"use client";
import { DownloadOutlined, PrinterOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import React from "react";
import jsPDF from "jspdf";

const PaymentSuccessPage = ({ searchParams }: any) => {
  // return <div>{searchParams.transactionId}</div>;
  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Name: shofikul islam", 10, 10);
    doc.text("Email: mdshafikuli421@gmail.com", 10, 20);
    doc.text("Amount: 497 $", 10, 30);
    doc.text("Transaction ID: 4548sdfa84sdf4sdf", 10, 40);
    doc.save("transaction_details.pdf");
  };
  return (
    <div className="flex justify-center items-center w-full  md:w-1/2 md:mx-auto h-[70vh]">
      <div className="flex items-center justify-center shadow-md rounded">
        <Result
          status="success"
          title=<h3 className="text-xl tracking-wide font-serif text-primary">
            Successfully Purchased this service
          </h3>
          subTitle=<>
            <div className="flex flex-col  gap-2 mt-8">
              <div className="flex justify-between  font-normal">
                <p className="font-semibold">Name</p>
                <p>shofikul islam</p>
              </div>
              <div className="flex justify-between font-normal">
                <p className="font-semibold">Email</p>
                <p>mdshafikuli421@gmail.com</p>
              </div>
              <div className="flex justify-between font-normal">
                <p className="font-semibold">Amount</p>
                <p className="text-secondary font-bold">497 $</p>
              </div>
              <div className="flex justify-between font-normal">
                <p className="font-semibold">Transaction ID </p>
                <p>4548sdfa84sdf4sdf</p>
              </div>
            </div>
          </>
          extra={[
            <Button
              onClick={() => window.print()}
              type="primary"
              key="print"
              className="print:hidden"
              icon={<PrinterOutlined />}
            >
              Print
            </Button>,
            <Button key={"pdf"} onClick={handleDownloadPdf}>
              <DownloadOutlined />
              Download PDF
            </Button>,
            <Button className="print:hidden" key="buy">
              Close
            </Button>,
          ]}
        />
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
