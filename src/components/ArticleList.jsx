import Article from "./Article";


function ArticleList({ array }) {
    let i = 0;
    const backgroundColors = ["bg-1", "bg-2", "bg-3", "bg-4"];

    return (
        array.map((article) => (
            <div key={i++}>
                <Article
                    data={article}
                    backgroundColor={i === 0 ? backgroundColors[i % 4] : backgroundColors[i % 4] + " bt-none"} />
            </div>
        ))
    );
}

export default ArticleList;