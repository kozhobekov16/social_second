import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Massages from "./Massage/Massages";
const Dialogs = (props) => {
  const dialogElem = props.state.data.map((elem) => (
    <DialogItem name={elem.name} id={elem.id} />
  ));
  const massage = props.state.massages.map((item) => (
    <Massages massages={item.massages} />
  ));
  return (
    <section className={s.dialogs}>
      <div className={s.names}>{dialogElem}</div>
      <div className={s.massages}>{massage}</div>
    </section>
  );
};
export default Dialogs;
