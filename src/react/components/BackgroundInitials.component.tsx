import React from "react";

interface BackgroundInitialsProps {
  className?: string;
}

function BackgroundInitials({ className = "" }: BackgroundInitialsProps) {
  return (
    <div className="backgroundInitials">
      <h1 className={`initials ${className}`}>PS</h1>
    </div>
  );
}

export default BackgroundInitials;
