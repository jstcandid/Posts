interface IProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: IProps) {
  return (
    <button
      className='btn btn-outline-success w-25'
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
