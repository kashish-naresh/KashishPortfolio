document.addEventListener("DOMContentLoaded", function () {
  // Terminal functionality
  const terminalInput = document.getElementById("terminal-input");
  const terminalContent = document.getElementById("terminal-content");
  const cardOverlay = document.getElementById("card-overlay");
  const cardContainer = document.getElementById("card-container");
  const closeCardBtn = document.getElementById("close-card-btn");
  const terminalContainer = document.getElementById("terminal-container");

  // Command history array and index
  const commandHistory = [];
  let historyIndex = -1;

  // Close card button event
  closeCardBtn.addEventListener("click", function () {
    cardOverlay.style.display = "none";
    terminalContainer.style.filter = "none";
    terminalInput.focus();
  });

  // Initial greeting
  typeWriter(
    "Welcome to KC's terminal portfolio!\nType 'help' to see available commands.\n\n",
    function () {
      printPrompt();
    }
  );

  terminalInput.addEventListener("keydown", function (e) {
    // Ctrl+L - Clear terminal
    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      terminalContent.innerHTML = "";
      printPrompt();
      return;
    }

    // Escape - Close card
    if (e.key === "Escape") {
      if (cardOverlay.style.display === "flex") {
        cardOverlay.style.display = "none";
        terminalContainer.style.filter = "none";
        terminalInput.focus();
      }
      return;
    }

    // Up Arrow - Previous command
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (
        commandHistory.length > 0 &&
        historyIndex < commandHistory.length - 1
      ) {
        historyIndex++;
        terminalInput.value =
          commandHistory[commandHistory.length - 1 - historyIndex];
      }
      return;
    }

    // Down Arrow - Next command
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value =
          commandHistory[commandHistory.length - 1 - historyIndex];
      } else {
        historyIndex = -1;
        terminalInput.value = "";
      }
      return;
    }

    // Ctrl+C - Show interrupt message
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      const outputElement = document.createElement("div");
      outputElement.className = "output";
      outputElement.textContent = "^C";
      terminalContent.appendChild(outputElement);
      printPrompt();
      return;
    }

    // Tab - Auto-complete
    if (e.key === "Tab") {
      e.preventDefault();
      const commands = [
        "help",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
        "clear",
        "exit",
      ];
      const currentInput = terminalInput.value.trim().toLowerCase();

      if (currentInput === "") return;

      const matchingCommands = commands.filter((cmd) =>
        cmd.startsWith(currentInput)
      );

      if (matchingCommands.length === 1) {
        terminalInput.value = matchingCommands[0];
      } else if (matchingCommands.length > 1) {
        const outputElement = document.createElement("div");
        outputElement.className = "output";
        outputElement.textContent = matchingCommands.join("    ");
        terminalContent.appendChild(outputElement);
        printPrompt();
      }
      return;
    }

    // Handle Enter key
    if (e.key === "Enter") {
      const command = terminalInput.value.trim();
      terminalInput.value = "";

      // Add to command history if not empty and not same as last command
      if (command && commandHistory[commandHistory.length - 1] !== command) {
        commandHistory.push(command);
      }
      historyIndex = -1;

      // Display the command
      const commandLine = document.createElement("div");
      commandLine.innerHTML = `<span class="prompt">visitor@portfolio:~$</span> <span class="command">${command}</span>`;
      terminalContent.appendChild(commandLine);

      // Process the command
      processCommand(command);

      // Scroll to bottom
      terminalContent.scrollTop = terminalContent.scrollHeight;
    }
  });

  function printPrompt() {
    const inputLine = document.querySelector(".terminal-input-line");
    inputLine.scrollIntoView();
  }

  function processCommand(command) {
    let output = "";
    let cardContent = "";

    switch (command.toLowerCase()) {
      case "help":
        output = `
Available commands:
<span class="help-command">about</span>      <span class="help-description">- Display information about me</span>
<span class="help-command">skills</span>     <span class="help-description">- Show my technical skills</span>
<span class="help-command">projects</span>   <span class="help-description">- List my projects</span>
<span class="help-command">experience</span> <span class="help-description">- My work experience</span>
<span class="help-command">education</span>  <span class="help-description">- My educational background</span>
<span class="help-command">contact</span>    <span class="help-description">- How to contact me</span>
<span class="help-command">clear</span>     <span class="help-description">- Clear the terminal</span>
<span class="help-command">exit</span>      <span class="help-description">- Close the terminal (just kidding)</span>
<span class="help-command">ipconfig</span>   <span class="help-description">- Show your IP information</span>

Keyboard Shortcuts:
<span class="help-command">Ctrl+L</span>    <span class="help-discription">- Clear terminal</span>
<span class="help-command">Esc</span>      <span class="help-discription">- Close current card</span>
<span class="help-command">↑/↓</span>      <span class="help-discription">- Command history</span>
<span class="help-command">Tab</span>      <span class="help-discription">- Auto-complete</span>
<span class="help-command">Ctrl+C</span>   <span class="help-discription">- Interrupt current command</span>
`;
        break;

      case "about":
        output = "Opening about information...";
        cardContent = `
<div class="card">
  <h2 class="card-title">
    <i class="fas fa-user"></i>
    About Me
  </h2>
  <div class="card-content">
    <p>Highly motivated and dedicated learner who also actively applies his knowledge through a diverse range of practical experiences and possesses excellent communication skills. This linguistic versatility opens doors to effective collaboration and communication across diverse teams and cultures. I am confident and simple individual who never let any stone unturned to achieve his goal.</p>
    
    <h3 style="margin-top: 20px;">Personal Interests</h3>
    <ul>
      <li>Open source contributions</li>
      <li>Technical writing and blogging</li>
      <li>Future Tech Leader</li>
      <li>Artificial intelligence</li>
    </ul>
    
    <div class="tech-tags">
      <span class="tech-tag">Trial-and-Error Coder</span>
      <span class="tech-tag">Software Engineer</span>
      <span class="tech-tag">Problem Solver</span>
      <span class="tech-tag">Tech Evangelist</span>
    </div>
  </div>
</div>
`;
        showCard(cardContent);
        break;

      case "skills":
        output = "Opening skills information...";
        cardContent = `
<div class="card">
  <h2 class="card-title">
    <i class="fas fa-code"></i>
    My Skills
  </h2>
  
  <div class="skill-category">
    <h3>Frontend Development</h3>
    <div class="skill-list">
      <span class="tech-tag">JavaScript</span>
      <span class="tech-tag">JavaFX</span>
      <span class="tech-tag">Three.js</span>
      <span class="tech-tag">HTML5</span>
      <span class="tech-tag">CSS3/Sass</span>
      <span class="tech-tag">PyQT</span>
    </div>
  </div>
  
  <div class="skill-category">
    <h3>Backend Development</h3>
    <div class="skill-list">
      <span class="tech-tag">Node.js</span>
      <span class="tech-tag">Express</span>
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Django</span>
      <span class="tech-tag">PHP</span>
      <span class="tech-tag">JavaEE</span>
    </div>
  </div>
  
  <div class="skill-category">
    <h3>Learning Journey</h3>
    <div class="skill-list">
      <span class="tech-tag">AWS</span>
      <span class="tech-tag">CI/CD</span>
      <span class="tech-tag">GitHub</span>
      <span class="tech-tag">MongoDB</span>
      <span class="tech-tag">MySQL</span>
      <span class="tech-tag">WebSockets</span>
      <span class="tech-tag">ML</span>
    </div>
  </div>
  
  <div class="skill-category">
    <h3>Soft Skills</h3>
    <div class="skill-list">
      <span class="tech-tag">Team Leadership</span>
      <span class="tech-tag">Agile Methodologies</span>
      <span class="tech-tag">Tinkerer in Tech</span>
      <span class="tech-tag">Mentoring</span>
    </div>
  </div>
</div>
`;
        showCard(cardContent);
        break;

      case "projects":
        output = "Opening projects information...";
        cardContent = `
<div class="card">
  <h2 class="card-title">
    <i class="fas fa-project-diagram"></i>
    Featured Projects
  </h2>
  
  <div class="project-card">
    <img src="src/terminal-portfolio.png" class="project-image" alt="E-commerce Platform">
    <h3>KC's Terminal Platform</h3>
    <br>
    <div class="card-content">
      <p>A unique, interactive portfolio where users can explore your skills, projects, and personal details through terminal commands.</p>
      <br>
      <ul>
        <li>Custom "ip" command to display the user's current IP address</li>
        <li>Simple, minimalistic design focused on a seamless user experience</li>
        <li>Skills section showcasing programming languages, tools, and technologies</li>
        <li>Projects section with brief descriptions and links to GitHub repositories</li>
        <li>Command-based navigation to enhance engagement and tech-savvy appeal</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">Three.js</span>
      <span class="tech-tag">JS</span>
      <span class="tech-tag">CSS</span>
      <span class="tech-tag">HTML</span>
    </div>
  </div>
  
  <div class="project-card" style="margin-top: 30px;">
    <img src="src/web-browser.png" class="project-image" alt="Task Management">
    <h3>KC's Web Browser</h3>
    <br>
    <div class="card-content">
      <p>A Privacy-Focused Web Browser with Enhanced User Experience:</p>
      <br>
      <ul>
        <li>No History Tracking: Privacy-first, no history saved.</li>
        <li>Dark Mode: Toggle between light and dark themes.</li>
        <li>No Data Retention: Clears all data on close.</li>
        <li>Bookmark Sidebar: Easy access to bookmarks at the bottom left.</li>
        <li>Minimal Interface: Clean, distraction-free browsing.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">WebSocket</span>
      <span class="tech-tag">PyQT</span>
    </div>
  </div>
  <div class="project-card" style="margin-top: 30px;">
    <img src="src/to-do-python.png" class="project-image" alt="Task Management">
    <h3>Project and Task Management</h3>
    <br>
    <div class="card-content">
      <p>A Project & Task Management Application with Efficient Task Tracking:</p>
      <br>
      <ul>
        <li>CRUD Operations: Create, Read, Update, Delete tasks effortlessly.</li>
        <li>User-friendly Interface: Simple and intuitive design for easy use.</li>
        <li>Deadline Notifications: Alerts before task deadlines.</li>
        <li>Database Storage: Secure storage of all project and task data.</li>
        <li>Task Focused: Primarily centered on managing projects and tasks.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">SQLite DB</span>
      <span class="tech-tag">PyQT</span>
    </div>
  </div>
  <div class="project-card" style="margin-top: 30px;">
    <img src="src/multi-tools.png" class="project-image" alt="Task Management">
    <h3>File Master</h3>
    <br>
    <div class="card-content">
      <p>Your all-in-one file conversion and processing solution:</p>
      <br>
      <ul>
        <li>Image Tools: Compress, convert, or change image formats (JPG, PNG, GIF, WEBP, and more).</li>
        <li>PDF Tools: Convert PDFs to text, images, or other formats and compress PDFs without losing quality.</li>
        <li>Document Tools: Convert Word and Excel files to PDFs, or convert PDFs to editable Word documents.</li>
        <li>Text Extraction: Use OCR to extract text from images, and transcribe audio or video files to text.</li>
        <li>Audio Tools: Convert, compress, or trim audio files (MP3, WAV, AAC, OGG).</li>
        <li>Privacy-Focused: All conversions happen in your browser; no files are uploaded to any server.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">HTML</span>
      <span class="tech-tag">CSS</span>
      <span class="tech-tag">JS</span>
    </div>
  </div>

  <div class="project-card" style="margin-top: 30px;">
    <img src="src/notes.png" class="project-image" alt="Task Management">
    <h3>Notes</h3>
    <br>
    <div class="card-content">
      <p>Your Ultimate Notes-Taking Application with a Stunning UI:</p>
      <br>
      <ul>
        <li>CRUD Operations: Easily Create, Read, Update, and Delete notes.</li>
        <li>Local Storage: All notes are stored locally for quick access.</li>
        <li>Medium-Inspired Theme: Sleek, minimalist design for a pleasant writing experience.</li>
        <li>User-Friendly Interface: Smooth navigation and intuitive layout for efficient note-taking.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">HTML</span>
      <span class="tech-tag">CSS</span>
      <span class="tech-tag">JS</span>
    </div>
  </div>

  <div class="project-card" style="margin-top: 30px;">
    <img src="src/to-do-web.png" class="project-image" alt="Task Management">
    <h3>To Do List</h3>
    <br>
    <div class="card-content">
      <p>Your Simple Yet Powerful To-Do List Website:</p>
      <br>
      <ul>
        <li>CRUD Operations: Create, Read, Update, and Delete tasks with ease.</li>
        <li>Local Storage: All tasks are securely stored locally for fast access.</li>
        <li>3 Themes: Choose between multiple themes to match your style.</li>
        <li>Task Management: An intuitive UI designed for effective task organization.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">HTML</span>
      <span class="tech-tag">CSS</span>
      <span class="tech-tag">JS</span>
    </div>
  </div>

  <div class="project-card" style="margin-top: 30px;">
    <img src="src/mind-reader.png" class="project-image" alt="Task Management">
    <h3>Mind Reader</h3>
    <br>
    <div class="card-content">
      <p>Mind Reader: The Number Guessing Game:</p>
      <br>
      <ul>
        <li>6 Interactive Cards: Think of a number between 0 and 63.</li>
        <li>Card Reveal: Check each card to see if your number is present.</li>
        <li>Instant Result: After 6 cards, your chosen number will be revealed.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">HTML</span>
      <span class="tech-tag">CSS</span>
      <span class="tech-tag">JS</span>
    </div>
  </div>

    <div class="project-card" style="margin-top: 30px;">
    <img src="src/car-2d.png" class="project-image" alt="Task Management">
    <h3>Car Racing 2D</h3>
    <br>
    <div class="card-content">
      <p>Thrilling 2D Car Racing Game: Dodge the Traffic!</p>
      <br>
      <ul>
        <li>High Scores: Saved in a text file to track your best performance.</li>
        <li>Random Cars: Cars approach in random directions and speeds.</li>
        <li>Dodge the Traffic: Control your car to avoid collisions and keep driving!</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">Java</span>
    </div>
  </div>

  <div class="project-card" style="margin-top: 30px;">
    <img src="src/flappy-bird.png" class="project-image" alt="Task Management">
    <h3>Flappy Bird</h3>
    <br>
    <div class="card-content">
      <p>Flappy Bird: Soar Through the Skies!</p>
      <br>
      <ul>
        <li>High Scores: Saved in a text file to track your best performance.</li>
        <li>Random Cars: Cars approach in random directions and speeds.</li>
        <li>Dodge the Traffic: Control your car to avoid collisions and keep driving!</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">Java</span>
    </div>
  </div>

  <div class="project-card" style="margin-top: 30px;">
    <img src="src/blinkit-clone.png" class="project-image" alt="Task Management">
    <h3>Blinkit Clone</h3>
    <br>
    <div class="card-content">
      <p>Blinkit Clone: Fast, Responsive, and User-Friendly!</p>
      <br>
      <ul>
        <li>Better UI: Sleek design for a smooth shopping experience.</li>
        <li>Fully Responsive: Optimized for any device, big or small.</li>
        <li>Redirects to Original: All links lead directly to the official Blinkit site.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">HTML</span>
      <span class="tech-tag">CSS</span>
    </div>
  </div>


  <div class="project-card" style="margin-top: 30px;">
    <img src="src/key-reader.png" class="project-image" alt="Task Management">
    <h3>Smart Key Reader</h3>
    <br>
    <div class="card-content">
      <p>Real-Time Key Tracker: Enhance Your Typing Experience!</p>
      <br>
      <ul>
        <li>Tracks Keystrokes: Displays words as you type in real-time.</li>
        <li>Shows Previous Text: View previously typed words for easy reference.</li>
        <li>Shortcut Tracking: Detects and shows all keyboard shortcuts typed.</li>
        <li>Drag & Drop: Place the tracker anywhere on your screen for convenience.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">HTML</span>
      <span class="tech-tag">CSS</span>
      <span class="tech-tag">JS</span>
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Tkinter</span>
    </div>
  </div>

    <div class="project-card" style="margin-top: 30px;">
    <img src="src/bulk-url-opener.png" class="project-image" alt="Task Management">
    <h3>Bulk URL Opener</h3>
    <br>
    <div class="card-content">
      <p>Bulk URL Opener: Open Multiple Links with a Single Click!</p>
      <br>
      <ul>
        <li>Open Multiple URLs: Quickly open a list of links all at once.</li>
        <li>Easy to Use: Simply paste URLs and click to open.</li>
        <li>Time-Saving: Automate the process of opening bulk links in one go.</li>
        <li>Customizable: Add as many URLs as you need for efficient browsing.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">HTML</span>
      <span class="tech-tag">CSS</span>
      <span class="tech-tag">JS</span>
    </div>
  </div>

  <div class="project-card" style="margin-top: 30px;">
    <img src="src/dark-mode.png" class="project-image" alt="Task Management">
    <h3>Dark Mode Extension</h3>
    <br>
    <div class="card-content">
      <p>Dark Mode Extension: Transform Your Browsing Experience!</p>
      <br>
      <ul>
        <li>One-Click Toggle: Switch to dark mode with a single click.</li>
        <li>Reduce Eye Strain: Enjoy a more comfortable browsing experience, especially at night.</li>
        <li>Universal Compatibility: Works across most websites for consistent dark mode.</li>
        <li>Customizable: Adjust brightness and contrast settings to suit your preferences.</li>
      </ul>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">HTML</span>
      <span class="tech-tag">CSS</span>
      <span class="tech-tag">JS</span>
    </div>
  </div>

</div>
`;
        showCard(cardContent);
        break;

      case "experience":
        output = "Opening experience information...";
        cardContent = `
<div class="card">
  <h2 class="card-title">
    <i class="fas fa-briefcase"></i>
    Work Experience
  </h2>
  
  <div class="card-content">
    <div class="timeline-item">
      <h3>SEO Intern</h3>
      <div class="date">OutRight Systems pvt. ltd. | Apr 2025 - Present</div>
      <ul>
        <li>Optimized CRM platform content using SEO best practices to enhance organic search visibility.</li>
        <li>Conducted keyword research and competitor analysis using SEO tools to refine content strategy.</li>
        <li>Implemented on-page SEO techniques, including meta tags, header optimization, and internal linking.</li>
        <li>Created SEO-friendly content for blogs and landing pages to improve engagement and rankings.</li>
        <li>Monitored website performance using Google Analytics and Search Console to track key metrics.</li>
        <li> Assisted in integrating SEO strategies with the CRM system for streamlined customer data tracking.</li>

      </ul>
    </div>
    
    <div class="timeline-item">
      <h3> Data Science Intern</h3>
      <div class="date">Bharat Intern | 2023 </div>
      <ul>
        <li>Developed Number Recognition and Stock Price Prediction models using Python and machine learning libraries</li>
        <li>Conducted data preprocessing, model training, and evaluation to improve prediction accuracy</li>
      </ul>
    </div>
    
    <div class="timeline-item">
      <h3>Cybersecurity & Ethical Hacking Intern</h3>
      <div class="date">TechnoHacks | 2023 </div>
      <ul>
        <li>Performed vulnerability assessments on target websites using Kali Linux and Burp Suite.</li>
        <li>Extracted and analyzed sensitive data, such as passwords, to identify security loopholes.</li>
        <li>Implemented security measures to reduce system vulnerabilities.</li>
      </ul>
    </div>

    <div class="timeline-item">
      <h3>Python Programming Intern</h3>
      <div class="date">Codsoft | 2023 </div>
      <ul>
        <li>Designed and developed a To-Do List application with a user-friendly interface using Tkinter</li>
        <li>Created a Rock-Paper-Scissors game and a Calculator application to demonstrate Python programming skills</li>
      </ul>
    </div>
    
    <div class="tech-tags" style="margin-top: 20px;">
      <span class="tech-tag">Leadership</span>
      <span class="tech-tag">Mentoring</span>
      <span class="tech-tag">Enthusiastic</span>
      <span class="tech-tag">Dedication</span>
    </div>
  </div>
</div>
`;
        showCard(cardContent);
        break;

      case "education":
        output = "Opening education information...";
        cardContent = `
<div class="card">
  <h2 class="card-title">
    <i class="fas fa-graduation-cap"></i>
    Education
  </h2>
  
  <div class="card-content">
    <div class="timeline-item">
      <h3>B.Tech in CSE - AI&ML</h3>
      <div class="date">AKTU | 2022 - present</div>
      <ul>
        <li>Specialized in Artificial Intelligence and Machine Learning</li>
        <li>Deep in algorithms, and code that never looks back.</li>
        <li>With a strong grasp on software engineering’s core,</li>
        <li>And software project management, I’m ready to explore!</li>
      </ul>
    </div>
    
    <div class="tech-tags" style="margin-top: 20px;">
      <span class="tech-tag">Artificial Intelligence</span>
      <span class="tech-tag">Machine Learning</span>
      <span class="tech-tag">Algorithms</span>
      <span class="tech-tag">DataBase Management System</span>
      <span class="tech-tag">Amazon Web Services</span>
      <span class="tech-tag">Java Full Stack</span>
    </div>
  </div>
</div>
`;
        showCard(cardContent);
        break;

      case "contact":
        output = "Opening contact information...";
        cardContent = `
<div class="card">
  <h2 class="card-title">
    <i class="fas fa-envelope"></i>
    Contact Me
  </h2>
  
  <div class="card-content">
    <p>Feel free to reach out for collaboration opportunities or just to say hello!</p>
    
   
<div style="margin-top: 30px;">
  <!-- Style to remove underline from links -->
  <style>
    .contact-method a {
      text-decoration: none;
      color: inherit; /* Optional: keeps text color consistent with parent */
    }
    .contact-method a:hover {
      text-decoration: underline; /* Optional: adds underline on hover */
    }
  </style>

  <!-- Email -->
  <div class="contact-method">
    <i class="fas fa-envelope"></i>
    <span><a href="mailto:kashishch888@example.com">kashishch888@example.com</a></span>
  </div>
  
  <!-- LinkedIn -->
  <div class="contact-method">
    <i class="fab fa-linkedin"></i>
    <span><a href="https://www.linkedin.com/in/kashishnaresh/" target="_blank">LinkedIn</a></span>
  </div>
  
  <!-- GitHub -->
  <div class="contact-method">
    <i class="fab fa-github"></i>
    <span><a href="https://github.com/kashish-naresh" target="_blank">GitHub</a></span>
  </div>
  
  <!-- Portfolio -->
  <div class="contact-method">
    <i class="fas fa-globe"></i>
    <span><a href="https://kashish-naresh.github.io/KashishPortfolio/" target="_blank">Portfolio</a></span>
  </div>
  
  <!-- Phone -->
  <div class="contact-method">
    <i class="fas fa-phone"></i>
    <span><a href="tel:+918882279852">+91 8882279852</a></span>
  </div>
</div>
    
    <div class="tech-tags" style="margin-top: 30px;">
      <span class="tech-tag">Available for work</span>
      <span class="tech-tag">Open to collaborations</span>
      <span class="tech-tag">Freelance projects</span>
    </div>
  </div>
</div>
`;
        showCard(cardContent);
        break;

      case "ipconfig":
        output = "Fetching your IP information...";
        fetchIPInfo()
          .then((ipInfo) => {
            const outputElement = document.createElement("div");
            outputElement.className = "output";
            outputElement.innerHTML = `
          <pre>IP Address: ${ipInfo.ip}
                Country: ${ipInfo.country_name} (${ipInfo.country_code})
                Region: ${ipInfo.region}
                City: ${ipInfo.city}
                ISP: ${ipInfo.org}
                Timezone: ${ipInfo.timezone}</pre>
        `;
            terminalContent.appendChild(outputElement);
            printPrompt();
          })
          .catch((error) => {
            const outputElement = document.createElement("div");
            outputElement.className = "output";
            outputElement.textContent =
              "Failed to fetch IP information. Please check your connection.";
            terminalContent.appendChild(outputElement);
            printPrompt();
          });
        break;

      case "clear":
        terminalContent.innerHTML = "";
        printPrompt();
        return;

      case "exit":
        output =
          "Nice try! You can't exit a web page with a terminal command. 😉";
        break;

      case "":
        output = "";
        break;

      default:
        output = `Command not found: ${command}\nType 'help' to see available commands.`;
    }

    if (output && command.toLowerCase() !== "ipconfig") {
      const outputElement = document.createElement("div");
      outputElement.className = "output";
      outputElement.innerHTML = output;
      terminalContent.appendChild(outputElement);
    }

    printPrompt();
  }

  function fetchIPInfo() {
    return fetch("https://ipapi.co/json/").then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  }
  function showCard(content) {
    cardContainer.innerHTML = content;
    cardOverlay.style.display = "flex";
    terminalContainer.style.filter = "blur(2px)";
    cardContainer.scrollTop = 0;
  }

  function typeWriter(text, callback) {
    let i = 0;
    const typewriterElement = document.createElement("span");
    typewriterElement.className = "typewriter";
    terminalContent.appendChild(typewriterElement);

    function typing() {
      if (i < text.length) {
        typewriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(typing, Math.random() * 30 + 20);
      } else {
        typewriterElement.classList.remove("typewriter");
        if (callback) callback();
      }
    }

    typing();
  }

  // Make terminal input always focused
  document.addEventListener("click", function () {
    terminalInput.focus();
  });
});
