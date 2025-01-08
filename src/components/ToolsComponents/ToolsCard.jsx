import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styling/ToolsCard.css'

export default function ToolsCard({ toolTitle, toolDesc, toolImg, toolId }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/tools/${toolId}`);
    };

    return (
        <div className="tools-card" onClick={handleCardClick}>
            <div className="tool-img" style={{ backgroundImage: `url(${toolImg})` }}></div>
            <h1 className="tool-title">{toolTitle}</h1>
            <div className="tool-desc">{toolDesc}</div>
        </div>
    );
}
