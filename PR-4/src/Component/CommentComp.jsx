import { useState } from "react";
import "./CommentComp.css";

function CommentComp() {
    const [form, setForm] = useState({
        name: "",
        review: "",
        rating: ""
    });

    const [comments, setComments] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.review || !form.rating) {
            setError("All fields are mandatory!");
            return;
        }

        setComments([{ ...form, id: Date.now() }, ...comments]);
        setForm({ name: "", review: "", rating: "" });
        setError("");
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h2>User Feedback</h2>
                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />

                <input type="text" name="review" placeholder="Write review" value={form.review} onChange={handleChange} />

                <select name="rating" value={form.rating} onChange={handleChange}>
                    <option value="">---Rating---</option>
                    <option>⭐</option>
                    <option>⭐⭐</option>
                    <option>⭐⭐⭐</option>
                    <option>⭐⭐⭐⭐</option>
                    <option>⭐⭐⭐⭐⭐</option>
                </select>

                <button>Post</button>
            </form>

            {error && <p className="error">{error}</p>}

            <div className="review-list">
                {comments.map((value) => (
                    <div className="card" key={value.id}>
                        <h4>{value.name}</h4>
                        <p>{value.review}</p>
                        <span>{value.rating}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentComp;
