import Avatar from "./avatar.component";
import MemberInfo from "./member-infor.component";
import Comment from "./comment.component";

function Member() {
  return (
    <div className="member">
      <Avatar />
      <MemberInfo />
      <Comment />
    </div>
  );
}

export default Member;
