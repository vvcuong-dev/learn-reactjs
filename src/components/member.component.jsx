function Member(props) {
  return (
    <div className="member">
      <h2>Member Name: {props.name}</h2>
      <p>Tuổi: {props.age}</p>
      <p>Địa chỉ giao hàng: {props["shipping-address"]}</p>
      {props.comment}
    </div>
  );
}

export default Member;
