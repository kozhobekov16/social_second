import React from 'react'
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <section>
      <div className={s.face}>
        <img
          className={s.avatar}
          src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
        />
        <span>Alena</span>
      </div>
    </section>
  );
};
export default ProfileInfo