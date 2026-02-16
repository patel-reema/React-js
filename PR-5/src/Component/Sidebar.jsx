const Sidebar = () => {

    <Col md={3}>
        <h5 className="title mb-4">Search</h5>
        <Form.Control placeholder="Search blog..." className="mb-4 rounded-pill" />

        <h5 className="title mb-4">Categories</h5>
        {categories.map((c, i) => (
            <div key={i} className="sidebar-cat">{c}</div>
        ))}


        <h5 className="mb-4 mt-4">Recent Posts</h5>

        {recentPosts.map(post => (
            <div key={post.id} className="recent-post">

                <img src={post.img} alt="" />

                <div>
                    <small>{post.date}</small>
                    <div className="recent-title">{post.title}</div>
                    <small>{post.com}</small>
                </div>

            </div>
        ))}

        <h5 className="mt-4">Tags</h5>

        <div className="tags-wrapper">
            {tags.map((tag, i) => (
                <Button key={i} className="btn-animated me-2 mb-2">
                    {tag}
                </Button>
            ))}
        </div>

    </Col>
}


export default Sidebar;