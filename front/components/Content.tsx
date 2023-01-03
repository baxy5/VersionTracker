import { ContentBox } from "./index"

const Content = ({ data }: any) => {
    return (
        <div className="md:flex md:justify-evenly pt-10">
            {data.map((item: any) => {
                return (
                    <ContentBox key={item.id} data={item} />
                )
            })}
        </div>
    )
}


export default Content