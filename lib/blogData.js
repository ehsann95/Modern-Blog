const blogPosts = [
  {
    id: 1,
    title: "The Principles of Minimalist Design",
    slug: "principles-of-minimalist-design",
    excerpt: "Explore the core principles that make minimalist design so powerful and how to apply them in your projects.",
    content: `
      <p>Minimalist design is more than just an aesthetic choice—it's a philosophy that emphasizes simplicity, functionality, and intention. In this article, we'll explore the core principles that make minimalist design so powerful and how to apply them in your projects.</p>

      <h2 id="less-is-more">Less is More</h2>
      <p>The cornerstone of minimalist design is the belief that less is indeed more. By stripping away unnecessary elements, we allow the essential components to breathe and communicate more effectively. This doesn't mean design should be bland or boring, but rather that every element should have a purpose and contribute to the overall message.</p>
      <p>When designing with minimalism in mind, ask yourself: "Does this element serve a purpose? Would removing it detract from the user experience?" If the answer is no, consider eliminating it.</p>

      <h2 id="negative-space">Embracing Negative Space</h2>
      <p>Negative space (or white space) is a powerful tool in minimalist design. It creates breathing room around elements, improving readability and drawing attention to what matters most. Don't be afraid of empty space—embrace it as a design element in its own right.</p>
      <p>Effective use of negative space can create a sense of elegance and sophistication that cluttered designs simply cannot achieve.</p>

      <h2 id="typography">Typography as a Design Element</h2>
      <p>In minimalist design, typography often becomes a focal point. Clean, legible fonts with thoughtful hierarchies can communicate your message without the need for excessive decorative elements.</p>
      <p>Consider using a limited type palette with clear contrast between headings and body text. Pay attention to line spacing, letter spacing, and font pairings to create a cohesive visual language.</p>

      <h2 id="color-palette">Limited Color Palette</h2>
      <p>Minimalist design typically employs a restricted color palette. This doesn't mean everything must be black and white (though that's a classic minimalist approach). Instead, choose a few complementary colors and use them consistently throughout your design.</p>
      <p>A limited palette creates a sense of harmony and makes your design more memorable. It also ensures that when you do use color, it has maximum impact.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Minimalist design is not about making something plain or boring—it's about distilling design down to its most essential and impactful elements. By embracing these principles, you can create designs that communicate clearly, function seamlessly, and stand the test of time.</p>
      <p>Remember that minimalism is not a rigid set of rules but a flexible approach that can be adapted to various contexts and purposes. The key is to maintain a focus on what truly matters and have the courage to eliminate everything else.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2023-08-15",
    tags: ["Design", "Minimalism"],
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 2,
    title: "Creating Effective User Experiences",
    slug: "creating-effective-user-experiences",
    excerpt: "Learn how to design user experiences that are both intuitive and delightful, with a focus on user-centered design principles.",
    content: `
      <p>User experience (UX) design is all about creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.</p>

      <h2 id="user-research">The Importance of User Research</h2>
      <p>User research is the foundation of effective UX design. By understanding your users' needs, behaviors, and motivations, you can create experiences that truly resonate with them.</p>
      <p>Methods for user research include interviews, surveys, usability testing, and analytics analysis. Each of these techniques provides valuable insights that can inform your design decisions.</p>

      <h2 id="information-architecture">Information Architecture</h2>
      <p>Information architecture (IA) is the structural design of shared information environments. In UX design, this means organizing and structuring content in a way that helps users find information and complete tasks efficiently.</p>
      <p>A well-designed IA should be intuitive, allowing users to navigate through your product without confusion or frustration.</p>

      <h2 id="intuitive-interaction">Designing Intuitive Interactions</h2>
      <p>Intuitive interactions are those that feel natural and obvious to users. They don't require extensive learning or documentation because they leverage existing mental models and patterns.</p>
      <p>To create intuitive interactions, consider familiar design patterns, provide clear feedback, and maintain consistency throughout the experience.</p>

      <h2 id="accessibility">Accessibility for All</h2>
      <p>Accessible design ensures that products are usable by people with a wide range of abilities. This includes considerations for visual, auditory, physical, and cognitive disabilities.</p>
      <p>By designing with accessibility in mind, you not only make your product available to a broader audience but often improve the experience for all users.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Creating effective user experiences requires a deep understanding of your users, thoughtful organization of information, intuitive interaction design, and a commitment to accessibility.</p>
      <p>Remember that UX design is an iterative process. Continually gather feedback, test your designs, and refine your approach based on what you learn. The goal is not perfection from the start but continuous improvement over time.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2023-09-02",
    tags: ["UX Design", "User Research"],
    author: {
      name: "Jamie Lee",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 3,
    title: "The Rise of Design Systems",
    slug: "the-rise-of-design-systems",
    excerpt: "Discover how design systems have revolutionized the way teams create consistent and scalable digital products.",
    content: `
      <p>Design systems have become an essential tool for companies looking to scale their digital products while maintaining consistency and quality. In this article, we'll explore what design systems are, why they're valuable, and how to implement them effectively.</p>

      <h2 id="what-are-design-systems">What Are Design Systems?</h2>
      <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. Think of it as a set of building blocks and the instructions for how to use them together.</p>
      <p>Design systems typically include UI components, design patterns, guidelines, principles, and sometimes code snippets or development resources.</p>

      <h2 id="benefits">The Benefits of Design Systems</h2>
      <p>Design systems offer numerous benefits to both design and development teams. They promote consistency across products, speed up the design and development process, improve collaboration between teams, and provide a single source of truth for the organization.</p>
      <p>By reducing the need to recreate common elements, design systems allow teams to focus on solving unique problems rather than reinventing the wheel.</p>

      <h2 id="building-blocks">Core Building Blocks</h2>
      <p>Effective design systems are built on several key components:</p>
      <p><strong>Design tokens:</strong> The variables that store visual design attributes like colors, typography, spacing, etc.</p>
      <p><strong>Components:</strong> The reusable UI elements that make up the interfaces of your products.</p>
      <p><strong>Patterns:</strong> The standard ways of combining components to solve common design problems.</p>
      <p><strong>Documentation:</strong> The guidelines that explain how and when to use each part of the system.</p>

      <h2 id="implementation">Implementing a Design System</h2>
      <p>Creating a successful design system requires thoughtful planning and execution. Start by auditing your existing designs to identify common elements and patterns. Then, prioritize which components to build first based on their frequency of use and impact.</p>
      <p>Remember that a design system is a living product that requires maintenance and evolution over time. Establish a governance process to manage changes and ensure the system continues to meet the needs of its users.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Design systems have fundamentally changed how digital products are created, enabling teams to work more efficiently and deliver more consistent experiences. Whether you're a small startup or a large enterprise, investing in a design system can pay significant dividends in the quality and scalability of your products.</p>
      <p>As the digital landscape continues to evolve, design systems will remain a crucial tool for organizations looking to create cohesive experiences across an expanding array of touchpoints and platforms.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2023-10-12",
    tags: ["Design Systems", "Product Design"],
    author: {
      name: "Taylor Kim",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 4,
    title: "Typography Fundamentals for Designers",
    slug: "typography-fundamentals-for-designers",
    excerpt: "Master the essential principles of typography to elevate your designs and communicate more effectively.",
    content: `
      <p>Typography is one of the most important elements of design, playing a crucial role in communication, usability, and aesthetics. In this article, we'll cover the fundamental principles of typography that every designer should know.</p>

      <h2 id="typeface-selection">Choosing the Right Typeface</h2>
      <p>Selecting appropriate typefaces is perhaps the most critical typographic decision you'll make. Consider the personality, readability, and historical context of a typeface before making your choice.</p>
      <p>For digital products, it's generally advisable to use no more than 2-3 typefaces to maintain visual harmony. Pair typefaces that complement each other while providing sufficient contrast.</p>

      <h2 id="hierarchy">Establishing Typographic Hierarchy</h2>
      <p>Typographic hierarchy refers to the arrangement of type to show the relative importance of different elements and guide the reader through the content in the intended sequence.</p>
      <p>Create hierarchy through variations in size, weight, color, spacing, and positioning. A clear hierarchy makes content more scannable and helps users find information quickly.</p>

      <h2 id="readability">Optimizing for Readability</h2>
      <p>Readability refers to how easily words, phrases, and blocks of text can be read. Several factors influence readability:</p>
      <p><strong>Line length:</strong> Aim for 45-75 characters per line for optimal readability.</p>
      <p><strong>Line spacing (leading):</strong> Generally, line spacing should be 120-160% of the font size.</p>
      <p><strong>Letter spacing (tracking):</strong> Adjust tracking based on the typeface and size; display text often benefits from tighter tracking.</p>
      <p><strong>Contrast:</strong> Ensure sufficient contrast between text and background.</p>

      <h2 id="responsive-typography">Responsive Typography</h2>
      <p>With the variety of devices and screen sizes available today, typography must be responsive. This means adapting type sizes, line heights, and sometimes even typefaces based on the viewing environment.</p>
      <p>Use relative units like em or rem instead of fixed units like pixels, and test your typography across different devices and screen sizes to ensure legibility and readability.</p>

      <h2 id="type-classification">Understanding Type Classification</h2>
      <p>Typefaces can be classified into several categories, each with its own characteristics and historical context. The main classifications include:</p>
      <p><strong>Serif:</strong> Typefaces with small decorative strokes at the ends of characters (e.g., Times New Roman).</p>
      <p><strong>Sans-serif:</strong> Typefaces without decorative strokes (e.g., Helvetica).</p>
      <p><strong>Monospace:</strong> Typefaces where each character occupies the same amount of horizontal space (e.g., Courier).</p>
      <p><strong>Display:</strong> Decorative typefaces designed for use at large sizes (e.g., Futura).</p>
      <p>Understanding these classifications can help you make more informed decisions about which typefaces to use in your designs.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Typography is both an art and a science, requiring a balance between aesthetic considerations and functional requirements. By mastering these fundamental principles, you'll be able to use typography more effectively in your designs, creating experiences that are both beautiful and user-friendly.</p>
      <p>Remember that typography isn't just about making text look good—it's about making it work well for your users. Always prioritize readability and legibility, and use typographic choices to support your overall design goals and message.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2023-11-05",
    tags: ["Typography", "Design Principles"],
    author: {
      name: "Jordan Rivers",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 5,
    title: "Color Theory for Digital Designers",
    slug: "color-theory-for-digital-designers",
    excerpt: "A comprehensive guide to understanding and applying color theory in your digital design projects.",
    content: `
      <p>Color is one of the most powerful tools in a designer's toolkit. It can influence mood, guide attention, communicate meaning, and create visual harmony. In this article, we'll explore the fundamentals of color theory and how to apply them in digital design.</p>

      <h2 id="color-wheel">The Color Wheel and Basic Terminology</h2>
      <p>The color wheel is a visual representation of colors arranged according to their chromatic relationship. It's a fundamental tool for understanding color theory.</p>
      <p>Key terminology includes:</p>
      <p><strong>Primary colors:</strong> Red, blue, and yellow (in traditional color theory).</p>
      <p><strong>Secondary colors:</strong> Colors created by mixing primary colors (green, orange, purple).</p>
      <p><strong>Tertiary colors:</strong> Colors created by mixing primary and secondary colors.</p>
      <p><strong>Hue:</strong> The pure color itself (e.g., pure red, blue).</p>
      <p><strong>Saturation:</strong> The intensity or purity of a color.</p>
      <p><strong>Value:</strong> The lightness or darkness of a color.</p>

      <h2 id="color-schemes">Color Schemes</h2>
      <p>Color schemes are combinations of colors used together in a design. Some common color schemes include:</p>
      <p><strong>Monochromatic:</strong> Different tints, shades, and tones of a single color.</p>
      <p><strong>Analogous:</strong> Colors that are adjacent to each other on the color wheel.</p>
      <p><strong>Complementary:</strong> Colors that are opposite each other on the color wheel.</p>
      <p><strong>Triadic:</strong> Three colors that are equidistant from each other on the color wheel.</p>
      <p><strong>Split-complementary:</strong> A base color plus the two colors adjacent to its complement.</p>
      <p>Each scheme creates a different visual effect and can evoke different emotions or responses.</p>

      <h2 id="color-psychology">Color Psychology and Meaning</h2>
      <p>Colors carry psychological and cultural associations that can impact how users perceive your design. For example:</p>
      <p><strong>Red:</strong> Energy, passion, danger, excitement.</p>
      <p><strong>Blue:</strong> Trust, calm, professionalism, reliability.</p>
      <p><strong>Green:</strong> Growth, nature, freshness, wealth.</p>
      <p><strong>Yellow:</strong> Optimism, clarity, warmth, caution.</p>
      <p>However, remember that color meanings can vary across cultures, so consider your audience when making color choices.</p>

      <h2 id="accessibility">Color Accessibility</h2>
      <p>When designing with color, it's crucial to consider accessibility for users with color vision deficiencies (commonly called color blindness) and other visual impairments.</p>
      <p>Ensure sufficient contrast between text and background colors (WCAG recommends a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text).</p>
      <p>Never rely on color alone to convey information—always provide additional visual cues like patterns, icons, or text labels.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Understanding color theory allows designers to make more informed and effective color choices. Remember that while theory provides valuable guidelines, there's also room for creative experimentation and intuition in your color decisions.</p>
      <p>The most successful color schemes balance aesthetic appeal with functionality, accessibility, and the specific needs of your project and audience. With practice and attention, you'll develop a stronger sense of how to use color to enhance your designs and achieve your communication goals.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2023-12-08",
    tags: ["Color Theory", "Design Principles"],
    author: {
      name: "Casey Zhang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 6,
    title: "The Art of UI Animation",
    slug: "the-art-of-ui-animation",
    excerpt: "Learn how subtle animations can dramatically improve user experience and add personality to your interfaces.",
    content: `
      <p>When used thoughtfully, animation can transform a static interface into an engaging, intuitive experience. This article explores the principles of effective UI animation and how to implement it in your designs.</p>

      <h2 id="purpose">The Purpose of UI Animation</h2>
      <p>Good UI animations serve a purpose beyond mere decoration. They can:</p>
      <p><strong>Provide feedback:</strong> Confirm a user's action has been recognized.</p>
      <p><strong>Guide attention:</strong> Direct users to important elements or changes on the screen.</p>
      <p><strong>Explain changes:</strong> Help users understand how elements relate to each other when the UI changes.</p>
      <p><strong>Express personality:</strong> Communicate brand personality and create emotional connections.</p>
      <p><strong>Improve perceived performance:</strong> Make waiting times feel shorter through thoughtful loading animations.</p>

      <h2 id="principles">Principles of Effective Animation</h2>
      <p>To create animations that enhance rather than detract from the user experience, follow these principles:</p>
      <p><strong>Purposeful:</strong> Every animation should serve a clear functional purpose.</p>
      <p><strong>Subtle:</strong> Animations should generally be understated and not distract from content.</p>
      <p><strong>Quick:</strong> Most UI animations should be brief (200-500ms) to avoid frustrating users.</p>
      <p><strong>Consistent:</strong> Create a system of animations that behave in predictable ways throughout your interface.</p>
      <p><strong>Natural:</strong> Mimic the physical world with natural easing and timing functions.</p>

      <h2 id="timing-easing">Timing and Easing</h2>
      <p>The timing and easing of your animations significantly impact how they feel. Easing refers to the acceleration and deceleration of the animation.</p>
      <p><strong>Ease-in:</strong> Starts slow and ends fast. Good for elements exiting the screen.</p>
      <p><strong>Ease-out:</strong> Starts fast and ends slow. Good for elements entering the screen.</p>
      <p><strong>Ease-in-out:</strong> Starts slow, speeds up in the middle, then slows down at the end. Good for movement within the viewport.</p>
      <p>The right timing and easing can make animations feel more natural and less mechanical.</p>

      <h2 id="types">Common Types of UI Animation</h2>
      <p>Several types of animations are particularly useful in interface design:</p>
      <p><strong>Transitions:</strong> Smooth changes between different states or pages.</p>
      <p><strong>Microinteractions:</strong> Small animations that provide feedback for user actions (e.g., button presses).</p>
      <p><strong>Loading indicators:</strong> Animations that communicate progress during wait times.</p>
      <p><strong>Motion effects:</strong> Subtle movements that add depth or dimension to static elements.</p>
      <p>Each type serves different purposes and should be used appropriately based on context.</p>

      <h2 id="accessibility">Animation and Accessibility</h2>
      <p>While animations can enhance the experience for many users, they can cause problems for others, particularly those with vestibular disorders or motion sensitivity.</p>
      <p>Always respect user preferences by checking the 'prefers-reduced-motion' media query and providing reduced or no animation for users who have this setting enabled.</p>
      <p>Additionally, ensure that important information is not conveyed solely through animation, and avoid animations that flash or pulse rapidly.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>UI animation is a powerful tool that, when used thoughtfully, can significantly improve usability, delight users, and communicate your brand's personality. The key is to use animation with intention and restraint, always in service of the user experience rather than as mere decoration.</p>
      <p>By following the principles outlined in this article and considering the needs of all users, you can create animations that enhance your interfaces and make them more intuitive, engaging, and accessible.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-20",
    tags: ["UI Animation", "User Experience"],
    author: {
      name: "Morgan Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  }
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug) || null;
}

export function getPostsByTag(tag) {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function searchPosts(query) {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) || 
    post.excerpt.toLowerCase().includes(lowercaseQuery) || 
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getFeaturedPosts() {
  return blogPosts.slice(0, 3);
}

export function getRecentPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
}

export function getAllTags() {
  const tagsSet = new Set();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagsSet.add(tag);
    });
  });
  return Array.from(tagsSet);
}

export function extractHeadings(content) {
  const headings = [];
  const h2Regex = /<h2 id="([^"]+)">(.*?)<\/h2>/g;
  let match;
  
  while ((match = h2Regex.exec(content)) !== null) {
    headings.push({
      id: match[1],
      text: match[2]
    });
  }
  
  return headings;
}
