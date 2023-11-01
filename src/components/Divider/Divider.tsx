
interface IDividerProps {
  title: string;
}
const TextWithUnderLine = ({ title }: IDividerProps) => {
  return (
    <div>
      <h5 className="text-primary group-hover:tracking-wider transition-all ease-in-out duration-1000 lg:text-3xl md:text-2xl text-xl">
       {title}
      </h5>
      <div className="bg-primary w-40 group-hover:w-72 group-hover:bg-secondary transition-all ease-in-out duration-1000 inline-flex items-center h-1 border-4"></div>
    </div>
  );
};

export default TextWithUnderLine;
