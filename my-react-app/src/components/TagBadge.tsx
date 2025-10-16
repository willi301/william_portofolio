import React from "react";

interface TagBadgeProps {
  label: string;
  // when true, force circular style (useful for short icons/letters)
  circular?: boolean;
}

const TagBadge: React.FC<TagBadgeProps> = ({ label, circular }) => {
  const isShort = label.length <= 2;
  const cls = `tag-badge ${circular || isShort ? "circle" : "pill"}`;

  return (
    <span className={cls} aria-label={`tech-${label.toLowerCase()}`} title={label}>
      {label}
    </span>
  );
};

export default TagBadge;
