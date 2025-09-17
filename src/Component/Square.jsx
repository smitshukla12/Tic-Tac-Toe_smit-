export default function Square({ value, onClick, highlight = false }) {
    // console.log(`Render Square: value=${value} `);
    return (
        <button
            type="button"
            className={`square ${highlight ? 'highlight' : ''}`}
            onClick={onClick}   // ✅ fixed casing
        >
            {value}
        
            
        </button>
    );
}
