# Interactive Process Workflow React App

A React TypeScript application that displays an interactive process workflow diagram using Mermaid.js with pan/zoom functionality and node highlighting.

## Features

- **Interactive Mermaid.js Diagram**: Comprehensive 10-phase workflow visualization
- **Pan and Zoom**: Navigate through the complex workflow with smooth pan/zoom controls
- **Node Highlighting**: Click on any node to highlight it and its connections
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern React**: Built with React 18, TypeScript, and Vite for fast development

## Workflow Phases

The diagram visualizes a complete workflow with the following phases:

1. **Hiring Workflow** - Application to rater pool
2. **Training & Onboarding** - Training assignment and certification
3. **Project Onboarding** - Project assignment and tool access
4. **Real-Time Monitoring** - Task work and signal ingestion
5. **Intelligent Auditing** - AI-assisted QA and risk assessment
6. **Performance Categorization** - Performance level classification
7. **Communication & Feedback** - AI-assisted feedback delivery
8. **Action Framework & RCA** - Severity assessment and corrective actions
9. **Retraining & Re-assessment** - Improvement programs
10. **Continuous Improvement & Reporting** - Analytics and dashboards

Additionally includes a "Key Questions & Metrics" section with priority questions (P0, P1, P2, P3) connected to relevant workflow components.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd interactive-process-workflow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`.

## Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Usage

### Navigation
- **Pan**: Click and drag to move around the diagram
- **Zoom**: Use mouse wheel to zoom in/out
- **Controls**: Use the pan/zoom controls in the top-right corner
- **Reset**: Double-click to reset view

### Interaction
- **Highlight Connections**: Click on any node to highlight it and its connected nodes/edges
- **Clear Highlights**: Click on empty space to clear all highlights
- **Responsive**: The interface adapts to different screen sizes

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Mermaid.js** - Diagram generation
- **svg-pan-zoom** - Pan and zoom functionality
- **CSS Modules** - Scoped styling

## Project Structure

```
src/
├── components/
│   ├── InteractiveWorkflow.tsx    # Main workflow component
│   └── InteractiveWorkflow.css    # Component styles
├── App.tsx                        # Root component
├── App.css                        # App styles
├── main.tsx                       # Entry point
└── index.css                      # Global styles
```

## Customization

### Modifying the Workflow
To modify the workflow diagram, edit the `mermaidDiagram` string in `src/components/InteractiveWorkflow.tsx`. The diagram uses Mermaid.js syntax.

### Styling
- Global styles: `src/index.css`
- App styles: `src/App.css`
- Component styles: `src/components/InteractiveWorkflow.css`

### Colors and Themes
The workflow uses color coding:
- **Green** (#c8e6c9): Success states (High Performing, Rater Pool)
- **Yellow** (#fff9c4): At-risk states
- **Red** (#ffcdd2): High-risk/low-performing states
- **Purple** (#f3e5f5): Critical alerts and terminations
- **Light Blue** (#e8eaf6): Questions and metrics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.