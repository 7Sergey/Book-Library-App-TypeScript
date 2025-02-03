import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  setUserName,
  UserState,
} from "../../redux/slices/userSlice";
import { useState } from "react";
import "./Profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser) as UserState;
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch(setUserName(name));
    setName("");
  };

  return (
    <div className="app-block user-form">
      <label>
        Имя пользователя: <h3>{user.name}</h3>
      </label>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Изменить имя</button>
      </form>
    </div>
  );
};

export default Profile;
