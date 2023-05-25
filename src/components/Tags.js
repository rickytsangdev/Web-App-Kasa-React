// Import modules
import '../styles/Tags.css'

// Component
function Tags({ tags }) {
  return (
    <div className="tags_bloc">
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
