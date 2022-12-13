function Subject(props) {
  const { header, subheader1, subheader2, subheader3 } = props;
  return (
    <>
      <div>
        <h2 className="header-name">{header}</h2>
        <p className="subheader">{subheader1}</p>
        <p className="subheader">{subheader2}</p>
        <p className="subheader">{subheader3}</p>
        <p className="subheader">View all questions</p>
      </div>
    </>
  );
}

export default Subject;
