import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'
import svgPanZoom from 'svg-pan-zoom'
import './InteractiveWorkflow.css'

const InteractiveWorkflow: React.FC = () => {
  const mermaidRef = useRef<HTMLDivElement>(null)
  const panZoomRef = useRef<any>(null)

  const mermaidDiagram = `
    flowchart TD

    %% Main Workflow
     subgraph subGraph0["Phase 1: Hiring Workflow"]
            B["<b>Document Collection</b>"]
            A["<b>Rater Application</b>"]
            C["<b>Background Verification</b>"]
            D["<b>Qualification Tests</b>"]
            E{"<b>Test Results</b>"}
            F["<b>Rater Pool</b>"]
            G["<b>Rejection</b>"]
      end
     subgraph subGraph1["Phase 2: Training & Onboarding"]
            H["<b>Training Assignment (Absorb)</b>"]
            I["<b>Simulator Setup</b>"]
            J["<b>Training Content Delivery</b>"]
            K["<b>Progress Monitoring (Amplitude)</b>"]
            L{"<b>Training Completion</b>"}
            M["<b>Training Certified</b>"]
            N["<b>Reminder/Support (Hubspot)</b>"]
      end
     subgraph subGraph2["Phase 3: Project Onboarding"]
            O["<b>Project Assignment</b>"]
            P["<b>Add to Client Tools (Raterhub)</b>"]
            Q["<b>Project-Specific Training</b>"]
            R["<b>Access Permissions Setup</b>"]
            S["<b>Active Rater Status</b>"]
      end
     subgraph subGraph3["Phase 4: Real-Time Monitoring"]
            T["<b>Task Assignment &amp; Work</b>"]
            U["<b>Work Submission</b>"]
            V["<b>Signal Ingestion (BigQuery)</b>"]
            W["<b>Threat Detection Engine (DEN)</b>"]
            X["<b>Advanced Analytics Engine</b>"]
            Y["<b>Gold Standard & Smoke Tests</b>"]
      end
     subgraph subGraph4["Phase 5: Intelligent Auditing"]
            Z_A["<b>AI-Assisted Work Selection for QA</b>"]
            Z_B{"<b>High Severity?</b>"}
            Z["<b>Risk Quality Framework</b>"]
            AA["<b>Predictive Quality Risk Scoring</b>"]
            BB["<b>Dynamic Profiling &amp; Cohorting</b>"]
            CC{"<b>Risk/Performance Level</b>"}
      end
     subgraph subGraph5["Phase 6: Performance Categorization"]
            DD["<b>High Performing</b>"]
            EE["<b>Improving / At-Risk</b>"]
            FF["<b>Low Performing / High-Risk</b>"]
            GG["<b>Rater Feedback Portal</b>"]
            HH["<b>Automated Alert (Sisense)</b>"]
            II["<b>Critical Alert / Suspension</b>"]
      end
     subgraph subGraph6["Phase 7: Communication & Feedback"]
            MM["<b>AI-Assisted Feedback System (LLM)</b>"]
            NN["<b>Personalized Communication (Hubspot)</b>"]
            OO["<b>Feedback Delivery</b>"]
            PP["<b>Engagement Tracking (Amplitude)</b>"]
            QQ{"<b>Engagement Level</b>"}
      end
     subgraph subGraph7["Phase 8: Action Framework & RCA"]
            UU{"<b>Severity Assessment</b>"}
            VV["<b>Auto-Enroll in Coaching</b>"]
            WW["<b>Formal Warning</b>"]
            XX["<b>Immediate Suspension</b>"]
            YY{"<b>Action Type</b>"}
            ZZ["<b>Remove from Tools</b>"]
            AAA["<b>Account Termination / Denylist</b>"]
            BBB["<b>Root Cause Analysis (RCA)</b>"]
            CCC["<b>Skill Gap Identification</b>"]
            DDD["<b>Personalized Improvement Plan</b>"]
      end
     subgraph subGraph8["Phase 9: Retraining & Re-assessment"]
            EEE["<b>Retraining Assignment (Absorb)</b>"]
            FFF["<b>Targeted Training Modules</b>"]
            GGG["<b>Retraining Progress Monitor</b>"]
            HHH{"<b>Retraining Complete?</b>"}
            III["<b>Re-assessment</b>"]
            KKK{"<b>Improvement Verified?</b>"}
      end
     subgraph subGraph9["Phase 10: Continuous Improvement & Reporting"]
            LLL["<b>Rater Profile Database (BigQuery)</b>"]
            MMM["<b>ML Engineering & Pipelines</b>"]
            NNN["<b>Individual Performance Analytics</b>"]
            OOO["<b>Cohort Analysis</b>"]
            RRR["<b>Impact Quantification & Analysis</b>"]
            SSS["<b>ML Model Lifecycle Management</b>"]
            WWW["<b>Executive & QC Dashboards (Sisense)</b>"]
      end
    
    %% Questions Subgraph
     subgraph "Key Questions & Metrics"
        direction TB
        Q1("<b>P0: Effectiveness of DEN & Rater Improvement?</b>")
        Q2("<b>What is engagement w.r.t. QC communication?</b>")
        Q4("<b>Do raters correct specific behaviors after feedback?</b>")
        Q5("<b>What is the logic for Re-qualification & Training Points?</b>")
        Q6("<b>What is the Termination/Denylisting rate?</b>")
        Q7("<b>What is the strategy for 'benching' vs. denylisting?</b>")
        Q8("<b>P2: What is the QC review process? Can we build an in-house QC agent?</b>")
        T9("<b>P1: PRD for Comments View Dashboard (Internal/External)</b>")
        T10("<b>P3: PRD for QC comments upload feature</b>")
      end

    %% Main Workflow Connections
        A --> B --> C --> D --> E
        E -- Pass --> F --> H
        E -- Fail --> G
        H --> I --> J --> K --> L
        L -- Complete --> M --> O
        L -- Incomplete --> N --> J
        O --> P --> Q --> R --> S --> T
        T --> U --> V --> W & X & Y
        W & X & Y --> Z_A
        Z_A --> Z_B
        Z_B -- No --> Z --> AA --> BB --> CC
        Z_B -- Yes --> II
        CC -- High --> DD
        CC -- At-Risk --> EE
        CC -- Low/High-Risk --> FF
        CC -- Non-Compliant --> II
        EE & FF --> HH --> UU
        UU -- Marginal --> VV --> BBB
        UU -- Moderate --> WW --> BBB
        UU -- Severe --> XX --> YY
        YY -- Temporary --> ZZ --> BBB
        YY -- Permanent --> AAA
        BBB --> CCC --> DDD --> EEE
        EEE --> FFF --> GGG --> HHH
        HHH -- Yes --> III --> KKK
        HHH -- No --> EEE
        KKK -- Yes --> S
        KKK -- No --> EEE
        XX & WW --> MM --> NN --> OO --> PP --> QQ
        QQ -- Low --> UU
        DD & GG & LLL & MMM --> WWW
        AA & PP --> LLL --> MMM --> NNN & OOO
        NNN & OOO --> RRR --> SSS --> V
    
    %% Question Connections to Workflow
        Q1 ---> W
        Q1 -.-> RRR
        Q1 -.-> NNN
    
        Q2 ---> PP
        Q2 -.-> QQ
    
        Q4 ---> X
        Q4 -.-> MM
        Q4 -.-> NNN
    
        Q5 ---> CCC
        Q5 -.-> III
        Q5 -.-> KKK
    
        Q6 ---> AAA
        Q6 -.-> WWW
    
        Q7 ---> ZZ
        Q7 -.-> DDD
        Q7 -.-> EEE
    
        Q8 ---> Z_A
        Q8 -.-> MM
    
        T9 ---> GG
        T9 -.-> WWW
    
        T10 ---> MM

    %% Styling
        style V shape:rect
        style Y shape:rect
        style MM shape:rect
        style WW shape:rect
        style FFF shape:rect
        style RRR shape:rect
    
        style F fill:#c8e6c9
        style S fill:#fff3e0
        style DD fill:#c8e6c9
        style EE fill:#fff9c4
        style FF fill:#ffcdd2
        style II fill:#f3e5f5
        style AAA fill:#f3e5f5
        style WWW fill:#f1f8e9
    
        style Q1 fill:#e8eaf6
        style Q2 fill:#e8eaf6
        style Q4 fill:#e8eaf6
        style Q5 fill:#e8eaf6
        style Q6 fill:#e8eaf6
        style Q7 fill:#e8eaf6
        style Q8 fill:#e8eaf6
        style T9 fill:#e8eaf6
        style T10 fill:#e8eaf6
  `

  useEffect(() => {
    const renderDiagram = async () => {
      if (!mermaidRef.current) return

      // Initialize Mermaid
      mermaid.initialize({ 
        startOnLoad: false,
        theme: 'default',
        themeVariables: {
          fontFamily: 'sans-serif'
        }
      })

      try {
        // Clear previous content
        mermaidRef.current.innerHTML = ''
        
        // Render the diagram
        const { svg } = await mermaid.render('mermaid-diagram', mermaidDiagram)
        mermaidRef.current.innerHTML = svg
        
        // Get the SVG element
        const svgElement = mermaidRef.current.querySelector('svg')
        if (svgElement) {
          addInteractivity(svgElement)
          addPanZoom(svgElement)
        }
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error)
      }
    }

    renderDiagram()

    // Cleanup function
    return () => {
      if (panZoomRef.current) {
        panZoomRef.current.destroy()
        panZoomRef.current = null
      }
    }
  }, [])

  const addPanZoom = (svg: SVGSVGElement) => {
    try {
      // Destroy existing instance if it exists
      if (panZoomRef.current) {
        panZoomRef.current.destroy()
      }

      // Initialize svg-pan-zoom
      panZoomRef.current = svgPanZoom(svg, {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 0.2,
        maxZoom: 10
      })

      // Handle window resize
      const handleResize = () => {
        if (panZoomRef.current) {
          panZoomRef.current.resize()
          panZoomRef.current.fit()
          panZoomRef.current.center()
        }
      }

      window.addEventListener('resize', handleResize)
      
      // Store the resize handler for cleanup
      ;(panZoomRef.current as any)._resizeHandler = handleResize
    } catch (error) {
      console.error('Error initializing pan-zoom:', error)
    }
  }

  const addInteractivity = (svg: SVGSVGElement) => {
    const allNodes = svg.querySelectorAll('.node')
    const allEdges = svg.querySelectorAll('.edgePath')
    const allElements = [...allNodes, ...allEdges]
    
    svg.addEventListener('click', (event) => {
      // Check if we're in panning mode
      if (svg.classList.contains('svg-pan-zoom_panning')) {
        return
      }
      
      const clickedNode = (event.target as Element).closest('.node')

      // Clear all highlights
      allElements.forEach(el => {
        el.classList.remove('highlight', 'dimmed')
      })

      if (!clickedNode) return
      
      // Dim all elements
      allElements.forEach(el => el.classList.add('dimmed'))

      const clickedNodeId = clickedNode.id.replace('flowchart-', '').replace('-text', '')
      const connectedEdges: Element[] = []
      const connectedNodeIds = new Set([clickedNodeId])

      // Find connected edges and nodes
      allEdges.forEach(edge => {
        const classList = edge.className.baseVal || edge.getAttribute('class') || ''
        const edgeMatch = classList.match(/LS-([^\s]+)\s+LE-([^\s]+)/)
        if (edgeMatch) {
          const startNode = edgeMatch[1].replace('flowchart-', '')
          const endNode = edgeMatch[2].replace('flowchart-', '')
          
          if (startNode === clickedNodeId || endNode === clickedNodeId) {
            connectedEdges.push(edge)
            connectedNodeIds.add(startNode === clickedNodeId ? endNode : startNode)
          }
        }
      })

      // Highlight clicked node and connected elements
      clickedNode.classList.remove('dimmed')
      clickedNode.classList.add('highlight')
      
      connectedEdges.forEach(edge => {
        edge.classList.remove('dimmed')
        edge.classList.add('highlight')
      })
      
      allNodes.forEach(node => {
        const nodeId = node.id.replace('flowchart-', '').replace('-text', '')
        if (connectedNodeIds.has(nodeId)) {
          node.classList.remove('dimmed')
          node.classList.add('highlight')
        }
      })
    })
  }

  return (
    <div className="interactive-workflow-container">
      <div ref={mermaidRef} className="mermaid-diagram" />
    </div>
  )
}

export default InteractiveWorkflow