import Thumnails from "./Thumnails";

export default function Results({ results }) {
    return (
        <div className="flex-initial w-5/6 px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results? results.map(result => (
                <Thumnails key={result.id} result={result} />
            )): <h2 className="text-center text-red-500">No Search Found</h2>}
        </div>
    )
}
