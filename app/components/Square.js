// app/components/Square.js
'use client';
export default function Square({ value, onClick }) {
    return (
      <button
        onClick={onClick}
        style={{
          width: '60px',
          height: '60px',
          fontSize: '24px',
        }}
      >
        {value}
      </button>
    );
  }
  