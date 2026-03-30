export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  description: string;
  features: ServiceFeature[];
  process: ServiceProcess[];
  faqs: ServiceFaq[];
  relatedServices: string[];
}

export const services: Service[] = [
  // ─── Managed Websites ────────────────────────────────────────────────────
  {
    slug: 'managed-websites',
    name: 'Managed Websites for Local Businesses',
    metaTitle: 'Managed Websites for Local Businesses | Luma Studios',
    metaDescription:
      'Custom websites built and fully managed for local businesses in Maine — no upfront design cost, automated lead capture, and unlimited edits included.',
    heroHeading: 'Turn Your Website Into an Automated Sales Machine',
    heroSubheading:
      'We build, host, and manage your local business website — with marketing automations that capture and nurture leads in the background so you can focus on your work.',
    description:
      'A dedicated service designed to turn local business websites into automated sales machines with no upfront design cost and ongoing management.',
    features: [
      {
        title: 'Custom Web Design',
        description:
          'Bespoke, conversion-focused layouts tailored to your business and brand, built to turn casual visitors into booked appointments.',
      },
      {
        title: 'Zero-Stress Management',
        description:
          'Hosting, security updates, and unlimited content edits handled for you — so you never have to touch web software again.',
      },
      {
        title: 'Automated Lead Capture',
        description:
          'Smart forms and lead capture that trigger instant notifications and pipelines for easy follow-up on every inquiry.',
      },
      {
        title: 'Marketing Automations',
        description:
          'Custom pipeline setup, automated email and SMS nurture sequences to keep leads warm without any manual follow-up from you.',
      },
      {
        title: 'Growth-Ready Strategy',
        description:
          'Strategic content structure designed around your business goals, plus training to help you understand how your site supports revenue.',
      },
      {
        title: 'Performance & SEO',
        description:
          'Fast-loading pages built on a modern stack with on-page SEO fundamentals baked in so your site gets found by local customers.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Discovery Call',
        description:
          'We start with a 30-minute call to understand your business, your ideal customers, and the goals you have for your website.',
      },
      {
        step: 2,
        title: 'Design & Build',
        description:
          'We design and build your custom site, then present it for your review before launch. You get unlimited revision rounds.',
      },
      {
        step: 3,
        title: 'Launch & Automate',
        description:
          'We launch your site, configure the lead capture forms, and set up your marketing automations so nothing falls through the cracks.',
      },
      {
        step: 4,
        title: 'Ongoing Management',
        description:
          'We handle hosting, security, and content updates every month. You focus on running your business — we keep the site running.',
      },
    ],
    faqs: [
      {
        question: 'What does "no upfront cost" mean exactly?',
        answer:
          'Instead of a large one-time payment for the design and build, you pay a flat monthly fee that covers everything — design, development, hosting, security, and ongoing management. There is no large invoice to pay before your site goes live. This makes it accessible for small businesses that need a high-quality site without tying up capital.',
      },
      {
        question: 'What kinds of local businesses do you work with?',
        answer:
          'We primarily work with local service businesses in Maine and across the U.S. — contractors, home services, professional services, health and wellness practices, and similar owner-operated businesses. These are businesses that depend on their website to generate phone calls, appointment bookings, and quote requests.',
      },
      {
        question: 'What marketing automations are included?',
        answer:
          'We set up automated email and SMS sequences that trigger whenever someone fills out a form on your site. These sequences warm up the lead and keep your business top-of-mind while you follow up. We also configure a customer journey pipeline so you can see every lead and where they are in the process at a glance.',
      },
      {
        question: 'Can I make changes to the site after it launches?',
        answer:
          'Yes — unlimited content edits are included in your monthly plan. If you need to update your services, change pricing, add photos, or update contact information, just let us know and we handle it, typically within one business day.',
      },
      {
        question: 'What happens if I want to cancel?',
        answer:
          'You can cancel at any time with 30 days notice. If you cancel, the website stays live for the remainder of the billing period. We can also provide you with an export of your content and design files so you are not left without anything.',
      },
    ],
    relatedServices: ['website-design', 'web-development', 'seo-services'],
  },

  // ─── Website Design ───────────────────────────────────────────────────────
  {
    slug: 'website-design',
    name: 'Website Design',
    metaTitle: 'Website Design Services Portland ME | Luma Studios',
    metaDescription:
      'Custom marketing website design for startups and growing businesses in Portland, Maine. High-fidelity Figma designs built for clarity and conversion.',
    heroHeading: 'Website Design That Turns Visitors Into Customers',
    heroSubheading:
      'We design custom marketing websites, landing pages, and product sites that guide visitors toward the actions that matter most to your business.',
    description:
      'Custom website design focused on clarity, conversion, and brand alignment. We create high-fidelity, responsive layouts that guide visitors toward key actions.',
    features: [
      {
        title: 'Custom Marketing Website Design',
        description:
          'Fully custom layouts built for your specific business, audience, and goals — not adapted from a template.',
      },
      {
        title: 'Landing Page Design',
        description:
          'Conversion-focused landing pages for campaigns, product launches, and lead generation that align with your brand and paid strategy.',
      },
      {
        title: 'Visual Hierarchy & UX',
        description:
          'Thoughtful visual hierarchy and UX decisions that reduce friction, clarify your message, and guide visitors toward key actions.',
      },
      {
        title: 'Design Systems',
        description:
          'Component libraries and style guides that keep all pages visually consistent and make future updates fast and predictable.',
      },
      {
        title: 'Responsive Layouts',
        description:
          'Designs that work across desktop, tablet, and mobile — with key breakpoints handled carefully, not just scaled down.',
      },
      {
        title: 'Developer-Ready Handoff',
        description:
          'High-fidelity Figma files with organized layers, annotated specs, and clear component documentation so implementation is smooth.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Research',
        description:
          'We review your existing materials, analyze your competitors, and align on your business goals, target audience, and key messages.',
      },
      {
        step: 2,
        title: 'Information Architecture',
        description:
          'We map out the site structure, page hierarchy, and content blocks — establishing a clear foundation before any visual work begins.',
      },
      {
        step: 3,
        title: 'Visual Design',
        description:
          'We design in Figma, starting with a design direction concept before moving into full high-fidelity layouts for all key pages.',
      },
      {
        step: 4,
        title: 'Responsive Refinement',
        description:
          'We extend the designs to tablet and mobile breakpoints, ensuring the experience holds up across screen sizes.',
      },
      {
        step: 5,
        title: 'Developer Handoff',
        description:
          'We deliver organized Figma files with annotations, spacing specs, and a component guide ready for your engineering team.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between website design and web development?',
        answer:
          'Website design is the visual and structural planning phase — we determine how the site looks, how information is organized, and how visitors navigate from page to page. Web development is the technical build phase, where those designs get coded into a working website. Many clients engage us for both, but we also work alongside in-house or external development teams who handle the build.',
      },
      {
        question: 'How many pages are included in a website design project?',
        answer:
          'Scope varies by project. A typical marketing site engagement covers 5–10 pages: home, about, services or product pages, a pricing page, and a contact page. Larger sites with more products or use-case pages require a broader scope. We define the page list and deliverables during discovery before any design work begins, so there are no surprises.',
      },
      {
        question: 'Do you design for mobile devices too?',
        answer:
          'Yes, responsive design is included in every project. We design for desktop first, then adapt the layouts to tablet and mobile breakpoints. We pay particular attention to mobile because a majority of web traffic now comes from phones — your site needs to look and function well on a small screen, not just scale down from desktop.',
      },
      {
        question: 'How many revision rounds do I get during the design process?',
        answer:
          'We typically work in structured review rounds: one round after the initial design direction concept, and one round after the full page designs. Most projects land within those two rounds because we do discovery work upfront to align on direction before designing. If more rounds are needed, we handle them reasonably — we want you to be genuinely happy with the result.',
      },
      {
        question: 'What do you deliver at the end of a website design project?',
        answer:
          'You receive organized Figma source files with all page designs, component libraries, and a style guide covering typography, colors, and spacing. If we are also handling development, these files flow directly into our build process. If you have an external developer, the files include annotations and documentation to make handoff smooth.',
      },
    ],
    relatedServices: ['web-development', 'ux-audits', 'brand-identity'],
  },

  // ─── Web Development ─────────────────────────────────────────────────────
  {
    slug: 'web-development',
    name: 'Web Development',
    metaTitle: 'Web Development Services Portland Maine | Luma Studios',
    metaDescription:
      'Modern web development using Astro and Tailwind CSS. Fast-loading, maintainable websites with clean code, SEO baked in, and integrations for forms and analytics.',
    heroHeading: 'Modern Web Development Built for Speed and Scale',
    heroSubheading:
      'We implement designs with clean, maintainable code using a modern front-end stack — so your site loads fast, ranks well, and holds up as your business grows.',
    description:
      'Modern, performance-focused web development using a custom stack built on Astro and Tailwind. We implement designs with clean code, fast load times, and integrations for forms, analytics, and other key tools.',
    features: [
      {
        title: 'Astro & Tailwind Stack',
        description:
          'We build primarily with Astro and Tailwind CSS — a modern stack that produces exceptionally fast sites without the overhead of heavier frameworks.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Bundle size management, image optimization, lazy loading, and appropriate caching patterns built in from the start — not added as an afterthought.',
      },
      {
        title: 'SEO & Metadata Structure',
        description:
          'Meta titles, descriptions, canonical URLs, Open Graph tags, and structured data wired in during the build so your site is search-ready at launch.',
      },
      {
        title: 'Form & Analytics Integrations',
        description:
          'Resend for email, Google Analytics, reCAPTCHA, and third-party integrations handled cleanly without bloating the site.',
      },
      {
        title: 'Accessibility',
        description:
          'Semantic HTML, appropriate ARIA attributes, keyboard navigation, and contrast checks that make the site accessible and trustworthy.',
      },
      {
        title: 'Vercel Deployment',
        description:
          'We deploy to Vercel with automatic previews, edge caching, and simple CI/CD so your team can ship updates confidently.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Technical Scoping',
        description:
          'We review the approved designs and map out the technical requirements — integrations, dynamic elements, and any custom functionality needed.',
      },
      {
        step: 2,
        title: 'Component Build',
        description:
          'We build the site component by component in Astro, starting with the layout and core components and working through each page.',
      },
      {
        step: 3,
        title: 'Integration & QA',
        description:
          'We wire in forms, analytics, and third-party services, then test across browsers and devices to ensure everything works reliably.',
      },
      {
        step: 4,
        title: 'Performance Audit',
        description:
          'We run performance audits and address any issues before handoff — targeting a Lighthouse score above 90 for performance and accessibility.',
      },
      {
        step: 5,
        title: 'Launch & Handoff',
        description:
          'We deploy to production, verify DNS and caching, and provide documentation so your team understands how to manage and update the site.',
      },
    ],
    faqs: [
      {
        question: 'Why do you use Astro instead of WordPress or Webflow?',
        answer:
          'Astro produces significantly faster websites than WordPress or Webflow by default because it ships minimal JavaScript to the browser. Most marketing sites do not need the overhead of a full JavaScript framework running on every page. Astro also gives us precise control over the codebase, which means better performance scores, fewer security vulnerabilities, and easier long-term maintenance. It is the right tool for marketing sites that need to load fast and rank well.',
      },
      {
        question: 'How fast will my website be after you build it?',
        answer:
          'Sites we build routinely score 90+ on Google PageSpeed Insights and target sub-second load times on modern connections. We achieve this through optimized images, lean HTML, minimal JavaScript, edge caching through Vercel, and avoiding heavy third-party scripts. We run performance audits before every launch and address any issues before handing the site over.',
      },
      {
        question: 'Can you take over development on an existing site?',
        answer:
          'It depends on the tech stack. We specialize in Astro and modern front-end technologies — we can also work with Next.js, plain HTML/CSS, or other component-based frameworks. If you have an existing WordPress site, we typically recommend a rebuild rather than maintenance, because the performance and security benefits are significant. We are happy to review your current setup and give you an honest assessment.',
      },
      {
        question: 'Do you handle hosting and deployment?',
        answer:
          'Yes. We deploy to Vercel and can manage the deployment setup for you. Vercel offers a generous free tier for most marketing sites and provides automatic preview deployments for every branch, edge caching, and a straightforward dashboard. We can also deploy to other platforms if you have an existing preference or infrastructure requirement.',
      },
      {
        question: 'What is included in the handoff documentation?',
        answer:
          'We provide a written handoff document covering how the site is structured, how to make common content updates, how environment variables are configured, and how deployments work. We also walk through the codebase in a recorded video call so your team can maintain and extend the site confidently without needing to ask us every time a small change comes up.',
      },
    ],
    relatedServices: ['website-design', 'seo-services', 'managed-websites'],
  },

  // ─── Brand Identity ───────────────────────────────────────────────────────
  {
    slug: 'brand-identity',
    name: 'Brand Identity Design',
    metaTitle: 'Brand Identity Design Services Portland ME | Luma Studios',
    metaDescription:
      'Logo and brand identity design for startups and growing businesses. Color, typography, and visual language that gives your business a recognizable presence.',
    heroHeading: 'Brand Identity That Gives Your Business a Distinct Voice',
    heroSubheading:
      'We develop visual identities that make your business instantly recognizable — from the logo and color palette to the guidelines that keep everything cohesive across every touchpoint.',
    description:
      'Brand identity design that gives your business a clear, recognizable visual language. We develop or refine your logo, color palette, typography, and core brand elements so every touchpoint feels cohesive and professional.',
    features: [
      {
        title: 'Logo & Wordmark Design',
        description:
          'A primary logo and supporting lockups designed to work at any size — from a website favicon to a large event banner.',
      },
      {
        title: 'Color Palette',
        description:
          'A defined primary and secondary color system with hex, RGB, and CMYK values for both digital and print use.',
      },
      {
        title: 'Typography System',
        description:
          'A curated type pairing covering headings, body, and UI text — with guidance on hierarchy and weights to keep all materials consistent.',
      },
      {
        title: 'Brand Usage Guidelines',
        description:
          'A lightweight brand guide covering logo usage rules, color application, and typography so your team and vendors stay on-brand.',
      },
      {
        title: 'Starter Asset Pack',
        description:
          'Core brand assets applied to real-world surfaces: social media templates, email signatures, and presentation deck styles.',
      },
      {
        title: 'Logo File Delivery',
        description:
          'Final logo files in all relevant formats — SVG, PNG, and PDF in both full-color and monochrome versions for every use case.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Brand Discovery',
        description:
          'We start with a structured questionnaire and a discovery call to understand your business, values, audience, and the visual direction that fits.',
      },
      {
        step: 2,
        title: 'Concept Exploration',
        description:
          'We present 2–3 distinct logo concepts with supporting color and type directions, so you can see meaningfully different approaches before committing.',
      },
      {
        step: 3,
        title: 'Refinement',
        description:
          'We refine the chosen direction through review rounds until the logo and core brand elements feel exactly right.',
      },
      {
        step: 4,
        title: 'System Build',
        description:
          'We extend the approved logo into a full color and typography system, then apply it to the starter asset pack.',
      },
      {
        step: 5,
        title: 'Final Delivery',
        description:
          'We deliver all final files and the brand guide, organized and clearly labeled so you or any future vendor can use them immediately.',
      },
    ],
    faqs: [
      {
        question: 'How many logo concepts do I get to review?',
        answer:
          'We present 2–3 distinct logo concepts in the first presentation — each representing a meaningfully different approach to your brand direction. This gives you genuine options without overwhelming the process. After you choose a direction, we move into refinement rounds to dial in the details. Most projects land within two refinement rounds.',
      },
      {
        question: 'Do you redesign existing logos or only create new ones?',
        answer:
          'We do both. For a rebrand or logo refinement, we review your existing mark and identify what is working and what is not before proposing a direction. Sometimes the right move is a subtle evolution rather than a complete redesign. We give you an honest assessment upfront rather than recommending a full rebuild when it is not necessary.',
      },
      {
        question: 'What file formats do I receive when the project is done?',
        answer:
          'You receive your logo in SVG, PNG, and PDF formats, in both full-color and one-color versions. SVG is vector format that scales perfectly for web and print. PNG files are delivered at high resolution for use anywhere a raster format is needed. PDF versions are included for print vendor submissions. All files are organized in a clearly labeled folder.',
      },
      {
        question: 'What is included in the brand guidelines document?',
        answer:
          'Our standard brand guide covers logo usage rules (clear space, minimum sizes, incorrect usage examples), the primary and secondary color palette with hex, RGB, and CMYK values, the typography system with guidance on hierarchy and weights, and basic application examples. For clients who need more depth — tone of voice, iconography, photography style — we offer an extended brand guide as an add-on.',
      },
    ],
    relatedServices: ['website-design', 'ad-creative', 'custom-illustrations'],
  },

  // ─── Ad Creative ─────────────────────────────────────────────────────────
  {
    slug: 'ad-creative',
    name: 'Ad Creative',
    metaTitle: 'Ad Creative Design Services for Paid Campaigns | Luma Studios',
    metaDescription:
      'On-brand ad creative for paid social and display campaigns. Static and motion concepts sized for Meta, LinkedIn, Google Display, and more.',
    heroHeading: 'Ad Creative That Stops the Scroll and Drives Clicks',
    heroSubheading:
      'We design on-brand visual assets for paid acquisition campaigns — tailored to your messaging and built to stand out on the platforms where your customers actually spend their time.',
    description:
      'Ad creative designed to support your paid acquisition and marketing campaigns. We produce on-brand visuals for paid social and display that are tailored to your messaging and landing pages.',
    features: [
      {
        title: 'Paid Social Creative',
        description:
          'Static and lightweight motion concepts for Meta (Facebook/Instagram), LinkedIn, and X — designed to stop the scroll and communicate quickly.',
      },
      {
        title: 'Display Ad Sets',
        description:
          'Complete display ad sets sized for Google Display Network and programmatic placements, covering all core dimensions.',
      },
      {
        title: 'Campaign-Specific Visuals',
        description:
          'Creative tied to a specific campaign theme, offer, or seasonal push — distinct from your standard brand content but visually consistent.',
      },
      {
        title: 'Landing Page Alignment',
        description:
          'Ad creative designed to visually connect to the landing page it points to, reducing friction and improving conversion rates.',
      },
      {
        title: 'Multiple Variations',
        description:
          'Multiple creative concepts per campaign so you can A/B test messaging, imagery, and layout to find what converts.',
      },
      {
        title: 'Organized Source Files',
        description:
          'Exported assets at spec for target platforms, plus organized Figma source files for future updates and seasonal refreshes.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Campaign Brief',
        description:
          'We review your campaign goals, target audience, messaging hierarchy, and landing page before touching a single pixel.',
      },
      {
        step: 2,
        title: 'Creative Concepts',
        description:
          'We present 2–3 distinct creative directions covering messaging, visual treatment, and layout approach.',
      },
      {
        step: 3,
        title: 'Asset Production',
        description:
          'We produce the full set of assets in all required sizes and formats, including any variations for A/B testing.',
      },
      {
        step: 4,
        title: 'Export & Delivery',
        description:
          'We deliver platform-spec exports and organized source files, clearly labeled for easy handoff to your media buyer.',
      },
    ],
    faqs: [
      {
        question: 'What ad platforms do you design for?',
        answer:
          'We design for all major paid social and display platforms including Meta (Facebook and Instagram), LinkedIn, X (Twitter), Google Display Network, and YouTube. We size assets to the current platform specifications for each placement — feed, story, banner, and so on. If you have a specific platform or placement requirement, let us know during the brief and we will include it in scope.',
      },
      {
        question: 'How many ad variations do you create per campaign?',
        answer:
          'It depends on the scope. A typical ad creative project includes 2–3 concept directions and a set of 6–12 final assets covering the core placements for one or two platforms. We build in A/B variations by default because testing different messages and visual treatments is one of the most reliable ways to improve campaign performance.',
      },
      {
        question: 'Do you create animated or video ads?',
        answer:
          'We create lightweight motion concepts for ads — simple animations like animated headlines, transitions, or looping graphic elements. These are delivered as GIF or MP4 exports suitable for social feeds and display placements. Full video production, including live footage or complex motion graphics, is outside our scope, but we can recommend partners for that work.',
      },
      {
        question: 'How do you ensure the creative aligns with my brand?',
        answer:
          'Before starting any ad creative work, we review your existing brand assets — logo files, color palette, typography, and any prior creative. If you have a brand guide, we work from it directly. If your brand guidelines are informal or undocumented, we do a quick alignment session at the start of the project to establish the visual rules that will govern the creative.',
      },
    ],
    relatedServices: ['brand-identity', 'website-design', 'custom-illustrations'],
  },

  // ─── Custom Illustrations ─────────────────────────────────────────────────
  {
    slug: 'custom-illustrations',
    name: 'Custom Illustrations & Iconography',
    metaTitle: 'Custom Illustration & Icon Design Services | Luma Studios',
    metaDescription:
      'Bespoke illustrations and custom icon sets for websites, marketing pages, and product interfaces. Visuals that clarify complex ideas and make your brand distinct.',
    heroHeading: 'Custom Illustrations That Make Your Brand Unforgettable',
    heroSubheading:
      'We create bespoke illustrations and icon sets that give your brand and interfaces a more distinct, expressive feel — designed to align with your visual identity and simplify complex ideas.',
    description:
      'Bespoke illustrations and icon sets that give your brand and interfaces a more distinct, expressive feel. We create visuals that simplify complex ideas and align with your overall visual identity.',
    features: [
      {
        title: 'Website Illustrations',
        description:
          'Custom spot illustrations and hero visuals for marketing pages that add personality and clarify concepts that text alone cannot explain.',
      },
      {
        title: 'Custom Icon Sets',
        description:
          'Cohesive icon libraries designed in your brand style, covering the specific concepts and actions relevant to your product or service.',
      },
      {
        title: 'Product Interface Illustrations',
        description:
          'Empty states, onboarding visuals, and UI illustrations that improve the user experience inside your product.',
      },
      {
        title: 'Explainer Diagrams',
        description:
          'Simplified visual diagrams that break down complex processes, technical concepts, or business models in a way that resonates with your audience.',
      },
      {
        title: 'Style Consistency',
        description:
          'A defined illustration style guide so all visuals feel like they belong to the same world and future additions stay consistent.',
      },
      {
        title: 'Vector Delivery',
        description:
          'All illustrations and icons delivered in SVG and other vector formats so they scale perfectly at any size for web and print.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Style Exploration',
        description:
          'We review your brand and present illustration style options — from clean and minimal to expressive and detailed — before any production begins.',
      },
      {
        step: 2,
        title: 'Concept Sketches',
        description:
          'We create rough sketches or loose digital concepts for the first 2–3 illustrations to validate direction and composition.',
      },
      {
        step: 3,
        title: 'Full Production',
        description:
          'With direction approved, we produce the full set of illustrations or icons in vector format, maintaining style consistency throughout.',
      },
      {
        step: 4,
        title: 'Delivery & Style Guide',
        description:
          'We deliver all files in SVG and export formats, along with a brief style guide covering stroke weight, color application, and usage rules.',
      },
    ],
    faqs: [
      {
        question: 'Can you match an illustration style I already have?',
        answer:
          'Yes. If you have existing illustrations and need us to extend the set in the same style, we study the existing work carefully and match the stroke weight, color handling, level of detail, and overall character before producing new pieces. We do a sample illustration first to confirm the style match before proceeding to the full set.',
      },
      {
        question: 'What file formats do you deliver illustrations in?',
        answer:
          'All illustrations are delivered in SVG as the primary format, which is vector-based and scales perfectly at any size without quality loss. We also deliver PNG exports at 2x resolution for contexts where SVG is not supported. For icon sets, we can export to icon font format or individual SVG files depending on how your team plans to implement them.',
      },
      {
        question: 'How long does a custom illustration project take?',
        answer:
          'A small illustration set of 5–8 spot illustrations typically takes two to three weeks from the initial style exploration through final delivery. Larger sets or complex hero illustrations take longer. We scope each project specifically and give you a timeline with milestones before work begins so you can plan around it.',
      },
      {
        question: 'Do you create icon sets as well as full illustrations?',
        answer:
          'Yes, we design icon sets regularly and they are a distinct service from full illustrations. Icon design requires different skills — consistent stroke weights, optical sizing, and legibility at small sizes. We design icons in your brand style and deliver them as SVG files suitable for direct use in web or product interfaces.',
      },
    ],
    relatedServices: ['brand-identity', 'website-design', 'ad-creative'],
  },

  // ─── Event Marketing ─────────────────────────────────────────────────────
  {
    slug: 'event-marketing',
    name: 'Event Marketing Materials',
    metaTitle: 'Event Marketing Design Services | Luma Studios',
    metaDescription:
      'Conference banners, booth graphics, signage, and print handouts designed to make your brand visible and professional at any in-person event.',
    heroHeading: 'Event Marketing Design That Gets You Noticed in the Room',
    heroSubheading:
      'We design the banners, booth graphics, signage, and print handouts that make your brand show up professionally at conferences, trade shows, and in-person activations.',
    description:
      'Event marketing design for conferences, meetups, and in-person activations. We create banners, signage, booth graphics, and print or digital handouts that present your brand clearly in busy event environments.',
    features: [
      {
        title: 'Event Banners & Signage',
        description:
          'Retractable banners, step-and-repeat backdrops, hanging signs, and other large-format prints designed to be visible and on-brand from across the room.',
      },
      {
        title: 'Booth Graphics',
        description:
          'Table covers, display panels, and booth-specific graphics that create a cohesive visual environment within your event space.',
      },
      {
        title: 'Printed Leave-Behinds',
        description:
          'Brochures, one-pagers, postcards, and simple handouts that attendees take with them — designed to reinforce your message after the event ends.',
      },
      {
        title: 'Event Digital Assets',
        description:
          'Digital screens, presentation templates, and social posts promoting your attendance or recap, aligned to your event visual system.',
      },
      {
        title: 'Print-Ready Files',
        description:
          'All files delivered print-ready with correct dimensions, bleed, color mode, and resolution specs tailored to your chosen vendor.',
      },
      {
        title: 'Cohesive Visual System',
        description:
          'A unified visual system across all event materials so your booth and handouts feel like a coordinated presence, not disconnected pieces.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Event Brief',
        description:
          'We gather details about the event, your booth setup, target audience, and key messages — plus any vendor specs for print materials.',
      },
      {
        step: 2,
        title: 'Visual Direction',
        description:
          'We propose a visual direction for the event materials that extends your brand while working within the physical constraints of the format.',
      },
      {
        step: 3,
        title: 'Design & Review',
        description:
          'We design all materials and present them for your review. We handle revisions before producing print-ready files.',
      },
      {
        step: 4,
        title: 'Print-Ready Delivery',
        description:
          'We deliver final files with the specifications your vendors need — CMYK PDFs with correct bleed and crop marks, and web exports for digital assets.',
      },
    ],
    faqs: [
      {
        question: 'How far in advance should I reach out before an event?',
        answer:
          'We recommend reaching out at least three to four weeks before your event date. This gives us enough time for design, revisions, and print production. For larger activations with multiple materials, six weeks is safer. Rush timelines are sometimes possible, but they depend on current availability — reach out as early as you can and we will tell you honestly whether we can meet your deadline.',
      },
      {
        question: 'Do you design for trade shows specifically?',
        answer:
          'Yes, trade shows are one of the most common event contexts we design for. Trade show design has specific requirements — materials need to read from a distance, convey a clear message quickly, and stand up to heavy traffic. We understand the physical realities of trade show environments and design with them in mind, not just for how things look on screen.',
      },
      {
        question: 'Do you provide the print specifications for vendors?',
        answer:
          'Yes. We deliver print-ready files with the correct dimensions, bleed, crop marks, color mode (CMYK), and resolution for each piece. If you have a specific vendor already selected, send us their technical specs and we will match them exactly. If you need vendor recommendations for banners or printing in the Maine area, we can point you in the right direction.',
      },
      {
        question: 'Can you create a cohesive visual system that covers our entire event presence?',
        answer:
          'That is exactly how we approach event work. Rather than designing individual materials in isolation, we establish a visual system at the start of the project that governs the look of every piece — banner, handout, screen, and social post. This creates a professional, unified presence that makes your brand memorable and recognizable across all event touchpoints.',
      },
    ],
    relatedServices: ['brand-identity', 'ad-creative', 'custom-illustrations'],
  },

  // ─── UX Audits ────────────────────────────────────────────────────────────
  {
    slug: 'ux-audits',
    name: 'UX Audits',
    metaTitle: 'UX Audit Services for Websites & Apps | Luma Studios',
    metaDescription:
      'UX audits that find the friction, confusion, and missed opportunities costing you conversions. Actionable recommendations and annotated examples delivered within two weeks.',
    heroHeading: 'UX Audits That Find What Is Quietly Killing Your Conversions',
    heroSubheading:
      'We review your existing website or key user flows, identify the friction points and messaging gaps that are costing you leads, and give you a clear, prioritized action plan to fix them.',
    description:
      'UX audits that uncover friction and missed opportunities in your existing website or key flows. We review structure, content, and interaction patterns, then provide actionable recommendations and annotated examples to improve clarity and conversion.',
    features: [
      {
        title: 'Heuristic Evaluation',
        description:
          'A structured review of your site against established usability principles — identifying anything that creates confusion, friction, or distrust.',
      },
      {
        title: 'Conversion Bottleneck Analysis',
        description:
          'A focused look at the pages and flows most critical to your business goals — pricing, contact, onboarding — to find where visitors drop off.',
      },
      {
        title: 'Content & Messaging Review',
        description:
          'An assessment of how clearly your site communicates what you do, who it is for, and why someone should choose you over alternatives.',
      },
      {
        title: 'Layout & Visual Hierarchy Review',
        description:
          'Analysis of how information is organized on the page — identifying visual noise, unclear priorities, and CTAs that are easy to miss.',
      },
      {
        title: 'Annotated Screenshots',
        description:
          'Every finding is documented with annotated screenshots and clear descriptions so your team can act on the recommendations immediately.',
      },
      {
        title: 'Optional Wireframe Proposals',
        description:
          'For key pages with significant issues, we can provide wireframe-level layout proposals showing how the page could be restructured.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Scope & Access',
        description:
          'We align on which pages or flows to audit, gather any available analytics, and review any context you can share about how visitors behave.',
      },
      {
        step: 2,
        title: 'Audit Review',
        description:
          'We conduct a thorough heuristic review of the scoped pages, documenting every issue, friction point, and missed opportunity we find.',
      },
      {
        step: 3,
        title: 'Report Preparation',
        description:
          'We organize all findings into a prioritized report with annotated screenshots, clear explanations, and specific recommendations for each issue.',
      },
      {
        step: 4,
        title: 'Walkthrough Call',
        description:
          'We present the audit findings in a recorded walkthrough call so your team can ask questions and understand the reasoning behind each recommendation.',
      },
    ],
    faqs: [
      {
        question: 'What exactly does a UX audit include?',
        answer:
          'A UX audit from Luma includes a heuristic evaluation of your site structure and key flows, a content and messaging review, a visual hierarchy and layout analysis, and a conversion bottleneck assessment. All findings are documented in a written report with annotated screenshots and prioritized recommendations. We also include a walkthrough call to present the findings and answer your questions.',
      },
      {
        question: 'How long does a UX audit take to complete?',
        answer:
          'Most UX audits are delivered within 7–10 business days from the start date. Larger sites with more pages or complex flows may take two weeks. We scope each audit upfront so you know the timeline before we begin. Faster turnarounds are sometimes possible depending on current availability.',
      },
      {
        question: 'How is a UX audit different from looking at my Google Analytics?',
        answer:
          'Analytics tell you where people are leaving but not why. A UX audit provides the qualitative context that data cannot — it explains the specific design, content, or structural reasons visitors are dropping off, confused, or failing to convert. Together, analytics and a UX audit give you a complete picture: the numbers tell you what is happening, and the audit tells you what to fix.',
      },
      {
        question: 'Do I need a UX audit if my site was recently redesigned?',
        answer:
          'Yes — in fact, this is often the best time for an audit. A fresh pair of eyes after a redesign frequently catches issues that the design team was too close to notice: navigation labels that made sense in Figma but confuse real visitors, mobile experiences that were deprioritized during the build, or CTAs that get buried by elements added late in the process. An audit shortly after launch is a smart investment.',
      },
      {
        question: 'Will I get specific recommendations or just a general overview?',
        answer:
          'You get specific, actionable recommendations for every issue we identify. Each finding includes the problem, why it matters for your users or conversion rate, and a concrete suggestion for how to fix it. We avoid vague observations like "improve the navigation." If the navigation has an issue, we tell you exactly what the issue is and what we would do differently.',
      },
    ],
    relatedServices: ['website-design', 'web-development', 'seo-services'],
  },

  // ─── SEO Services ────────────────────────────────────────────────────────
  {
    slug: 'seo-services',
    name: 'SEO Services',
    metaTitle: 'SEO Services Portland Maine | Luma Studios',
    metaDescription:
      'SEO services aligned with your web design and development work. On-page fundamentals, technical SEO, and content structure to help Maine businesses get found.',
    heroHeading: 'SEO Services That Help Your Local Business Get Found',
    heroSubheading:
      'We implement practical, measurable SEO improvements aligned with your website — from on-page fundamentals and technical basics to content structure that targets the searches your customers are actually making.',
    description:
      'SEO services tightly aligned with design and development work, focused on practical wins rather than abstract audits. We help with on-page fundamentals, technical basics, and content structure for Maine businesses.',
    features: [
      {
        title: 'On-Page SEO Implementation',
        description:
          'Meta titles, descriptions, heading structure, internal linking, and content optimization for each page — targeting queries with real local intent.',
      },
      {
        title: 'Technical SEO Foundations',
        description:
          'Crawlability, sitemaps, canonical URLs, robots.txt, page speed, and structured data — the technical layer that determines whether Google can find and index your site correctly.',
      },
      {
        title: 'Local SEO for Businesses',
        description:
          'Google Business Profile optimization, local citations, and location-specific page structure that helps you rank when people search for services in Portland, Bangor, or across Maine.',
      },
      {
        title: 'Content Structure Guidance',
        description:
          'Keyword research and content recommendations that align your pages with the specific queries your potential customers are searching for.',
      },
      {
        title: 'Schema & Structured Data',
        description:
          'JSON-LD schema markup (LocalBusiness, Service, FAQ, BreadcrumbList) that helps search engines understand your pages and display rich results.',
      },
      {
        title: 'SEO Audit & Implementation Plan',
        description:
          'A prioritized audit covering your current site with specific, scoped recommendations tied to your business goals and site architecture.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'SEO Audit',
        description:
          'We review your existing site for technical issues, on-page gaps, and local visibility opportunities and deliver a prioritized action plan.',
      },
      {
        step: 2,
        title: 'Keyword & Intent Mapping',
        description:
          'We identify the searches your target customers are making and map those queries to the pages on your site best positioned to rank for them.',
      },
      {
        step: 3,
        title: 'On-Page Implementation',
        description:
          'We implement the agreed optimizations — titles, descriptions, headings, internal links, schema markup — directly in your site.',
      },
      {
        step: 4,
        title: 'Technical Fixes',
        description:
          'We address crawl errors, page speed issues, canonical problems, and any other technical issues found in the audit.',
      },
      {
        step: 5,
        title: 'Content & Monitoring Guidance',
        description:
          'We provide recommendations for ongoing content creation and show you how to track progress in Google Search Console so you can see the results.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see results from SEO?',
        answer:
          'For on-page and technical SEO work on an existing site, you can start seeing improvements in crawl coverage and indexing within a few weeks. Ranking improvements for competitive queries typically take three to six months to become meaningful. Local SEO results — especially for Google Maps and local pack rankings — often move faster, sometimes within four to eight weeks. SEO is a cumulative process, and earlier investments compound over time.',
      },
      {
        question: 'What is included in your on-page SEO service?',
        answer:
          'Our on-page SEO work covers meta titles and descriptions optimized to target specific queries, heading structure review and corrections (H1, H2, H3 hierarchy), internal linking improvements to distribute page authority across the site, image alt text, and schema markup implementation. We work directly in your codebase rather than providing a to-do list for your team to action.',
      },
      {
        question: 'Do you offer local SEO for Portland, Maine businesses?',
        answer:
          'Yes — local SEO is one of our primary focuses. We help local businesses in Portland and across Maine improve their visibility for location-specific searches like "web design Portland Maine" or "contractor near me." This includes on-page geo-targeting, Google Business Profile guidance, local citation consistency, and structured data that tells Google exactly where your business is and what it does.',
      },
      {
        question: 'How do you measure whether SEO is working?',
        answer:
          'We set up Google Search Console tracking before we start and use it to monitor impressions, clicks, and ranking positions for your target keywords over time. We also track organic traffic in Google Analytics and, for local businesses, monitor calls and direction requests from your Google Business Profile. We give you a simple reporting framework so you can see progress without needing to become an SEO expert.',
      },
      {
        question: 'Do you write the content or just optimize what I already have?',
        answer:
          'We primarily optimize and restructure existing content rather than writing it from scratch, though we can provide content outlines and structural guidance that make new pages highly effective. For businesses that need new pages written — service pages, location pages, blog posts — we can include copywriting in the scope or recommend content writers we trust to execute against our structural recommendations.',
      },
    ],
    relatedServices: ['web-development', 'website-design', 'ux-audits'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Services that have dedicated dynamic pages at /services/[slug] */
export const dynamicServiceSlugs = [
  'website-design',
  'web-development',
  'brand-identity',
  'ad-creative',
  'custom-illustrations',
  'event-marketing',
  'ux-audits',
  'seo-services',
];
