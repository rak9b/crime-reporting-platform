// LoginForm.jsx
import { useDispatch } from 'react-redux';
import { loginUser } from '../../services/auth.service';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(credentials);
      dispatch(setAuthUser(user));
      dispatch(showNotification('Login successful!'));
    } catch (error) {
      dispatch(showNotification('Invalid credentials', 'error'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Sign In
      </button>
    </form>
  );
};
