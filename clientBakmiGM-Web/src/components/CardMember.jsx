import { useState } from "react";
import "./CardMember.css";

const CardMember = ({ title, progress, status }) => {
    let progressBarColor;
    if (progress <= 25) progressBarColor = "red";
    else if (progress <= 50) progressBarColor = "orange";
    else if (progress <= 75) progressBarColor = "yellow";
    else progressBarColor = "green";

    let displayText;
    if (status === "New Member") {
        displayText = "0 Spend";
    } else if (status === "Gold Target") {
        displayText = (
            <span>
                Spend <span className="bold">3,500,001</span> by{" "}
                <span className="bold">23 Nov 2024</span> to reach{" "}
                <span className="bold">Gold</span>
            </span>
        );
    }
    const progressDot = (
        <div
            className={[
                "progressDot",
                progress === 100 ? "hideProgressDot" : "",
            ].join(" ")}
        />
    );

    return (
        <div className="card">
            <div className="titleContainer">
                <span className="projectTitle">{title}</span>
                <span className="learnMoreText">LEARN MORE</span>
            </div>
            <div className="iconContainer">
                <ion-icon name="medal-outline" className="crown" style={{ color: 'silver' }}></ion-icon>
                <span className="crownSeparator"> - </span>
                <ion-icon name="medal-outline" className="crown" style={{ color: 'gold' }}></ion-icon>
                <span className="crownSeparator"> - </span>
                <ion-icon name="medal-outline" className="crown" style={{ color: 'black' }}></ion-icon>
            </div>


            <div className="progressBarContainer">
                <div
                    className="progressBarFill"
                    style={{ width: `${progress}%`, backgroundColor: progressBarColor }}
                ></div>
                {progressDot}
            </div>
            <span className="progressLabel">{displayText}</span>
        </div>
    );
};

export default CardMember;
