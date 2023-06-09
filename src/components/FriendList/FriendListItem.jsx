import css from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.Online : css.Offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
