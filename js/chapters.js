window.CHAPTERS = [
  {
    "id": 1,
    "title": "What is Version Control?",
    "analogy": "Diary vs Loose Papers",
    "emoji": "\ud83d\udcd3",
    "desc": "Imagine writing your project on loose papers. Lose one = disaster. Version Control is a diary where every page is dated, you never erase, you just add new pages. You can go back to any day.",
    "content": "<p><strong>Simple analogy:</strong> Without version control = doing homework on tissue paper. One wind blows it away. With version control = writing in a bound notebook with page numbers and dates.</p><ul><li><strong>Why you need it:</strong> Track who changed what, when, and why. Undo mistakes. Work with others without emailing files like <code>final_final_v2.zip</code>.</li><li><strong>Real world:</strong> Google Docs history, iPhone photo versions, Wikipedia edits.</li></ul><div class='lab'><h4>Mini Check</h4><p>Have you ever lost work because you overwrote a file? That's the problem Git solves.</p></div>"
  },
  {
    "id": 2,
    "title": "Git vs GitHub",
    "analogy": "Engine vs Garage",
    "emoji": "\u2699\ufe0f",
    "desc": "Git is the engine that runs locally on your laptop. GitHub is the garage in the cloud where you park, show, and let others work on your car.",
    "content": "<p><strong>Git</strong> = Local software. Works offline. Tracks changes.</p><p><strong>GitHub</strong> = Online home for Git repos. Collaboration, backup, Actions, Pages.</p><p>Think: Microsoft Word (Git) vs Google Docs (GitHub). One is local, one is shared in the cloud.</p>"
  },
  {
    "id": 3,
    "title": "Setup \u2014 Your ID Card",
    "analogy": "Passport & Keys",
    "emoji": "\ud83e\udeaa",
    "desc": "Before entering the garage, you need ID. Setup Git identity and authentication.",
    "content": "<p>Steps:</p><ol><li>Create GitHub account</li><li>Set Git config: <code>git config --global user.name</code> and <code>user.email</code></li><li>Add SSH key or use HTTPS + Personal Access Token</li></ol><div class='code-block'><pre>git config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"\nssh-keygen -t ed25519 -C \"you@example.com\"</pre></div>"
  },
  {
    "id": 4,
    "title": "Your First Repository",
    "analogy": "Empty Locker to Cloud",
    "emoji": "\ud83d\udce6",
    "desc": "A repository is a folder with superpowers \u2014 it remembers everything.",
    "content": "<p>Create locally and push to cloud.</p><div class='code-block'><pre>mkdir my-first-project\ncd my-first-project\ngit init\necho \"# Hello World\" > README.md\ngit add README.md\ngit commit -m \"feat: first commit\"\ngit branch -M main\ngit remote add origin https://github.com/YOU/my-first-project.git\ngit push -u origin main</pre></div>"
  },
  {
    "id": 5,
    "title": "Commits \u2014 Your Save Points",
    "analogy": "Video Game Save",
    "emoji": "\ud83d\udcbe",
    "desc": "Commit = save point you can return to. Each commit has message, author, snapshot.",
    "content": "<p>Good commits are like good diary entries: small, clear, meaningful.</p><div class='code-block'><pre>git status\ngit add index.html\ngit commit -m \"feat: add homepage hero\"\ngit log --oneline</pre></div><p><strong>Rule:</strong> Commit early, commit often. Not one giant 500-line commit.</p>"
  },
  {
    "id": 6,
    "title": "History \u2014 Time Machine",
    "analogy": "Undo Button for Life",
    "emoji": "\u23ea",
    "desc": "Logs, restore, reset, .gitignore \u2014 how to travel in time safely.",
    "content": "<div class='code-block'><pre>git log --graph --all --oneline\ngit restore index.html\ngit restore --staged index.html\necho \"node_modules/\" >> .gitignore</pre></div><p><strong>Analogy:</strong> .gitignore = bouncer at club door \u2014 tells Git what NOT to track.</p>"
  },
  {
    "id": 7,
    "title": "Branches \u2014 Parallel Universes",
    "analogy": "Draft Copies",
    "emoji": "\ud83c\udf3f",
    "desc": "Branch = copy of your project to experiment without breaking main.",
    "content": "<div class='code-block'><pre>git branch feature/about-page\ngit checkout -b feature/about-page\n# work...\ngit commit -am \"feat: add about page\"</pre></div><p>Main is the published textbook. Branches are your rough drafts.</p>"
  },
  {
    "id": 8,
    "title": "Merging Branches",
    "analogy": "Combining Drafts",
    "emoji": "\ud83d\udd00",
    "desc": "Merging brings your draft back into the main textbook.",
    "content": "<div class='code-block'><pre>git checkout main\ngit merge feature/about-page\ngit push origin main</pre></div><p>Fast-forward = no conflict. Simple.</p>"
  },
  {
    "id": 9,
    "title": "Merge Conflicts",
    "analogy": "Same Homework Line",
    "emoji": "\ud83d\udca5",
    "desc": "Two people edited same line. Git stops and asks you to choose.",
    "content": "<p>Conflict markers:</p><div class='code-block'><pre>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nYour change\n=======\nTheir change\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</pre></div><p>Fix file, <code>git add</code>, <code>git commit</code>. Like resolving two edits on same Google Doc line.</p>"
  },
  {
    "id": 10,
    "title": "Remotes \u2014 Push & Pull",
    "analogy": "Sending Letters",
    "emoji": "\ud83d\udce4",
    "desc": "Local vs Remote. Push = send letter. Pull = receive updates.",
    "content": "<div class='code-block'><pre>git remote -v\ngit push origin main\ngit pull origin main\ngit fetch --all</pre></div>"
  },
  {
    "id": 11,
    "title": "Pull Requests",
    "analogy": "Teacher Review Gate",
    "emoji": "\ud83e\udd1d",
    "desc": "PR = 'Please review my draft before it becomes part of the official book'.",
    "content": "<p>Workflow:</p><ol><li>Push branch</li><li>Open PR on GitHub</li><li>Review, comment, approve</li><li>Merge</li></ol><p>This is how every company works \u2014 no one pushes directly to main.</p>"
  },
  {
    "id": 12,
    "title": "Issues & Projects",
    "analogy": "Team Todo List",
    "emoji": "\ud83d\udccb",
    "desc": "Issues = tasks. Projects = kanban board. Track work transparently.",
    "content": "<p>Create Issue \u2192 assign \u2192 branch \u2192 PR \u2192 close issue with <code>Closes #123</code>.</p>"
  },
  {
    "id": 13,
    "title": "GitHub Actions \u2014 Robot Assistant",
    "analogy": "Auto Checker Robot",
    "emoji": "\ud83e\udd16",
    "desc": "Actions = robot that runs tests/lint/deploy every push.",
    "content": "<div class='code-block'><pre>name: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: echo \"Hello CI\"</pre></div><p>Your 1-min pipeline: Lint \u2192 Test \u2192 Deploy.</p>"
  },
  {
    "id": 14,
    "title": "GitHub Pages \u2014 Free Publishing",
    "analogy": "Free Publishing House",
    "emoji": "\ud83d\ude80",
    "desc": "Deploy your site free. Like free printing press.",
    "content": "<p>Settings \u2192 Pages \u2192 Deploy from main / root. Your site lives at <code>username.github.io/repo</code>.</p>"
  },
  {
    "id": 15,
    "title": "Best Practices & Capstone",
    "analogy": "Team Rules",
    "emoji": "\ud83c\udfc6",
    "desc": "Conventional commits, README, LICENSE, .gitignore, CODEOWNERS.",
    "content": "<p><strong>Capstone:</strong> Build personal portfolio repo with README, 3 branches, 1 PR, 1 conflict resolved, Actions CI that lints, Pages deployment.</p><ul><li>Use <code>feat:</code>, <code>fix:</code>, <code>docs:</code></li><li>Small PRs</li><li>Write good README</li></ul>"
  }
];