import re

with open('src/components/WalletSection.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace {!expandedSubFrame && ( <> ... </> )} with <div className="activity-text-content"> ... </div>
pattern1 = re.compile(r'\{!expandedSubFrame && \(\s*<>\s*(<h4.*?</p>)\s*</>\s*\)\}', re.DOTALL)
content = pattern1.sub(r'<div className="activity-text-content">\n                        \1\n                      </div>', content)

# Replace {expandedSubFrame && ( <> <div className="adp-header"...>...</div> <div className="adp-content">...</div> </> )}
# with just the header and content.
pattern2 = re.compile(r'\{expandedSubFrame && \(\s*<>\s*(<div className="adp-header".*?</div>\s*<div className="adp-content">.*?</div>)\s*</>\s*\)\}', re.DOTALL)
content = pattern2.sub(r'\1', content)

# Add lastExpandedSubFrame logic
replacement_state = """const [expandedSubFrame, setExpandedSubFrame] = useState(null); // e.g., 'challenges', 'macros', etc.
  const lastExpandedRef = useRef(null);
  if (expandedSubFrame) {
    lastExpandedRef.current = expandedSubFrame;
  }
  const currentOrLastSubFrame = expandedSubFrame || lastExpandedRef.current;"""

content = content.replace(
    "const [expandedSubFrame, setExpandedSubFrame] = useState(null); // e.g., 'challenges', 'macros', etc.",
    replacement_state
)

# Replace {expandedSubFrame === '...' && with {currentOrLastSubFrame === '...' &&
subframes = [
    'challenges', 'mapping', 'activities', 'macros', 'hydration', 'meal logs',
    'symptoms', 'medication', 'conditions', 'prescriptions',
    'sleep', 'reproductive', 'steps', 'vitals', 'breathing', 'mood'
]

for sf in subframes:
    content = content.replace(f"{{expandedSubFrame === '{sf}' &&", f"{{currentOrLastSubFrame === '{sf}' &&")

# Add has-expanded class
content = content.replace('className="activities-frames-container"', 'className={`activities-frames-container ${expandedSubFrame ? \\\'has-expanded\\\' : \\\'\\\'}`}')

with open('src/components/WalletSection.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Refactor complete.")
