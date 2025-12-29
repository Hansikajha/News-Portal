import React, { useState } from "react";
import adsbanner from "../assets/adsbanner.png";
import christmas from "../assets/christmas.jpeg";
import fitness from "../assets/fitness.jpeg";
import food from "../assets/food.jpeg";
import school from "../assets/school.jpeg";
import pic2 from "../assets/pic2.jpg";
import { FaEdit, FaTrash, FaReply } from "react-icons/fa";

export default function Description() {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editText, setEditText] = useState("");
    const [errors, setErrors] = useState({});

    const formatTimestamp = (date) => {
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return "Just now";
        if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
        return date.toLocaleDateString();
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!commentText.trim()) {
            newErrors.commentText = "Comment cannot be empty";
        }
        if (commentText.trim().length < 3) {
            newErrors.commentText = "Comment must be at least 3 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const newComment = {
            id: Date.now(),
            name: name.trim(),
            text: commentText.trim(),
            timestamp: new Date(),
        };

        setComments([newComment, ...comments]);
        setName("");
        setCommentText("");
        setErrors({});
    };

    const handleEdit = (comment) => {
        setEditingId(comment.id);
        setEditName(comment.name);
        setEditText(comment.text);
    };

    const handleUpdate = (id) => {
        if (!editName.trim() || !editText.trim() || editText.trim().length < 3) {
            setErrors({ editText: "Comment must be at least 3 characters" });
            return;
        }

        setComments(comments.map(comment =>
            comment.id === id
                ? { ...comment, name: editName.trim(), text: editText.trim() }
                : comment
        ));
        setEditingId(null);
        setEditName("");
        setEditText("");
        setErrors({});
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            setComments(comments.filter(comment => comment.id !== id));
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditName("");
        setEditText("");
        setErrors({});
    };
    return (
        <section className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-gray-800 text-6xl font-extrabold p-5 leading-relaxed text-center border-b border-gray-400">
                Microsoft Hires Sam Altman Hours After OpenAI Rejects His Return As C.E.O.
            </h1>

            {/* Advertisement banner */}
            <div className="max-w-full h-[100px] my-5">
                <img
                    src={adsbanner}
                    alt="Advertisement"
                    className="mx-auto max-w-full h-auto"
                />
            </div>

            {/* ===== Parenting / Lalan-Palan Section ===== */}
            <div className="my-14">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Large */}
                    <div className="lg:col-span-2 relative overflow-hidden rounded">
                        <img
                            src={pic2}
                            alt="MIcrosoft"
                            className="w-full h-[420px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold hover:text-blue-500 cursor-pointer">
                             Microsoft Hires Sam Altman
                        </h3>
                    </div>

                    {/* Right List */}
                    <div className="space-y-6">
                        {[food, fitness, christmas, food, school].map((img, index) => (
                            <div key={index} className="flex gap-3 items-start">
                                <img
                                    src={img}
                                    alt="side"
                                    className="w-20 h-16 object-cover rounded"
                                />
                                <p className="text-sm font-medium text-gray-800 leading-snug hover:text-blue-500 cursor-pointer">
                                    अभिभावकमा धैर्यताको परीक्षा : बच्चाले भनेको मान्नै पर्ने ?
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-md text-gray-800 leading-relaxed tracking-wide">
                In mid-November 2023, the artificial intelligence community was shaken by a sudden and highly
                public leadership crisis at OpenAI, the creator of ChatGPT, when the company's board of directors
                unexpectedly ousted its co-founder and chief executive officer, Sam Altman, citing a lack of
                “consistent candor” in his communications with the board — a move that shocked employees, investors,
                and partners alike. In the days that followed, efforts by investors and staff to reinstate
                Altman gained momentum, but negotiations with the board ultimately failed, and OpenAI declined his
                return to the CEO position, instead appointing former Twitch co-founder Emmett Shear as interim
                chief executive. <br />
                In a rapid response that underscored both the intensity of the situation and
                Altman's high standing in the AI industry, Microsoft — a major investor in OpenAI with a
                multibillion-dollar strategic partnership — announced within hours that it had hired
                Altman along with OpenAI co-founder and former president Greg Brockman to lead a newly formed
                advanced artificial intelligence research team at the company. Microsoft's CEO Satya Nadella publicly
                welcomed the pair, emphasizing the resources and support the platform would provide and signaling a
                deepening commitment to AI innovation even as the crisis at OpenAI revealed significant governance
                tensions. The move not only offered Altman a powerful new platform immediately after being turned
                away by OpenAI's board but also triggered widespread reaction across the tech sector, from employee
                threats to quit en masse to investor reassessments of leadership and strategic direction in one of
                the most closely watched battles over the future of AI. <br />
                Altman along with OpenAI co-founder and former president Greg Brockman to lead a newly formed
                advanced artificial intelligence research team at the company. Microsoft's CEO Satya Nadella publicly
                welcomed the pair, emphasizing the resources and support the platform would provide and signaling a
                deepening commitment to AI innovation even as the crisis at OpenAI revealed significant governance
                tensions. The move not only offered Altman a powerful new platform immediately after being turned
                away by OpenAI's board but also triggered widespread reaction across the tech sector, from employee
                threats to quit en masse to investor reassessments of leadership and strategic direction in one of
                the most closely watched battles over the future of AI.
            </p>

             {/* Advertisement banner */}
            <div className="max-w-full h-[100px] my-5">
                <img
                    src={adsbanner}
                    alt="Advertisement"
                    className="mx-auto max-w-full h-auto"
                />
            </div>

            {/* Comment Section */}
            <div className="my-12 border-t border-gray-300 pt-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Comments ({comments.length})</h2>

                {/* Comment Form */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (errors.name) setErrors({ ...errors, name: "" });
                                }}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.name ? "border-red-500" : "border-gray-300"
                                }`}
                                placeholder="Enter your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                                Your Comment <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="comment"
                                value={commentText}
                                onChange={(e) => {
                                    setCommentText(e.target.value);
                                    if (errors.commentText) setErrors({ ...errors, commentText: "" });
                                }}
                                rows="4"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                                    errors.commentText ? "border-red-500" : "border-gray-300"
                                }`}
                                placeholder="Write your comment here..."
                            />
                            {errors.commentText && (
                                <p className="text-red-500 text-sm mt-1">{errors.commentText}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                        >
                            <FaReply /> Post Comment
                        </button>
                    </form>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                    {comments.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            <p className="text-lg">No comments yet. Be the first to comment!</p>
                        </div>
                    ) : (
                        comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                {editingId === comment.id ? (
                                    // Edit Mode
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                value={editName}
                                                onChange={(e) => setEditName(e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Comment
                                            </label>
                                            <textarea
                                                value={editText}
                                                onChange={(e) => {
                                                    setEditText(e.target.value);
                                                    if (errors.editText) setErrors({ ...errors, editText: "" });
                                                }}
                                                rows="3"
                                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                                                    errors.editText ? "border-red-500" : "border-gray-300"
                                                }`}
                                            />
                                            {errors.editText && (
                                                <p className="text-red-500 text-sm mt-1">{errors.editText}</p>
                                            )}
                                        </div>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleUpdate(comment.id)}
                                                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <FaEdit /> Save
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    // Display Mode
                                    <>
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                    {comment.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    {formatTimestamp(comment.timestamp)}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleEdit(comment)}
                                                    className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                                    title="Edit comment"
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(comment.id)}
                                                    className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                                    title="Delete comment"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                            {comment.text}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>

        </section>
    );
}