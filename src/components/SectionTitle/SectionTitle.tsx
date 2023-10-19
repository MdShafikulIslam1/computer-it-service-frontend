interface IProps {
    title:string;
    description:string
}
const SectionTitle = ({title,description}:IProps) => {
    return (
        <div className="w-full my-8 space-y-2">
            <h4 className="text-blue-500 text-center text-3xl ">------ {title} ------</h4>
            <p className="w-1/2 mx-auto text-center text-2xl font-bold">{description} <span className="text-blue-400 ">Success</span>  </p>
        </div>
    );
};

export default SectionTitle;