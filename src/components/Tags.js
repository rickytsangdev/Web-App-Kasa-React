// Import modules
import '../styles/Tags.css'

// Component
function Tags({ tags }) {
  console.log(tags)
  return (
    <div className="tags_bloc">
      <ul className="tags">
        {tags.map((tag) => (
          <li className="tag">{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
