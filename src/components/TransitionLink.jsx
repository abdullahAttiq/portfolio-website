import { useNavigate } from 'react-router-dom';

export default function TransitionLink({ to, children, className, style, ...props }) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const cover = document.querySelector('.page-cover');
    if (cover) {
      cover.classList.remove('curtain-out');
      cover.classList.add('curtain-in');
    }
    setTimeout(() => navigate(to), 600);
  }

  return (
    <a href={to} onClick={handleClick} className={className} style={style} {...props}>
      {children}
    </a>
  );
}
