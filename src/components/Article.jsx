function Article({data, backgroundColor}) {
    const { title, author, isPublic, body } = data;

    return (
        <>
            <div className={`my-card ${backgroundColor}`}>
                <h1 className="text-center">{title}</h1>
                <p className="my-0">Author: {author}</p>
                <p className="my-0">Public: {isPublic === true ? "Yes" : "No"}</p>
                <p className="my-3">{body}</p>
            </div>
        </>
    )
}

export default Article;