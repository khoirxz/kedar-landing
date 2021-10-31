import "./style.scss";

function Section({ title, sub, children, ...props }) {
  return (
    <div className="section" {...props}>
      <div className="section-container">{children}</div>
    </div>
  );
}

export default Section;
