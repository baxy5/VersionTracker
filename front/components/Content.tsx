import { ContentBox } from "./index"

const Content = ({ data }: any) => {
    return (
        <div className="flex flex-col gap-5 pt-10 px-3 md:flex-row md:justify-evenly">
            {data.map((item: any) => {
                return (
                    <ContentBox key={item.id} data={item} />
                )
            })}
        </div>
    )
}


export default Content