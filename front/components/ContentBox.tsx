import Link from "next/link"

const ContentBox = ({ data }: any) => {
    return (
        <div>
            <div className="w-fit p-3 text-center rounded shadow-lg shadow-[0_0_10px_rgba(147,_64,_255)] ease-in-out transition-all duration-150 hover:shadow-[0_0_20px_rgba(147,_64,_255)]">
                <h3>NodeJS (latest): {data[0].name}</h3>
                <p>12.3.3: {data[0].version}</p>
                <Link href="" >
                    Download
                </Link>
            </div>
        </div>
    )
}

export default ContentBox