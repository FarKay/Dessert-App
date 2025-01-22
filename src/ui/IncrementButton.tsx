interface IncrementButtonProps {
  onClick: () => void;
}

function IncrementButton({ onClick }: IncrementButtonProps) {
  return (
    <div onClick={onClick} className="border py-1 px-1 rounded-full">
      <img src="assets/images/icon-increment-quantity.svg" alt="+" />
    </div>
  );
}

export default IncrementButton;
