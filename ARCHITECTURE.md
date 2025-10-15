# 11H59 - Next.js Architecture Documentation

## Project Overview

This is a single-page Next.js application built for 11H59, a company revolutionizing corporate catering with sustainable and convivial solutions. The architecture is designed for future CMS integration while currently using static content.

## Architecture Decisions

### App Router with Server Components
- **Why**: Modern Next.js architecture for better performance and SEO
- **Benefits**: Server-side rendering, automatic code splitting, streaming UI
- **Implementation**: Each section is a Server Component that can fetch data independently

### Modular Section-Based Architecture
```
src/
├── app/
│   ├── api/contact/route.ts          # Contact form API endpoint
│   ├── globals.css                   # Global styles with brand colors
│   ├── layout.tsx                    # Root layout with metadata
│   └── page.tsx                      # Main page composition
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Fixed header with smooth navigation
│   │   └── Footer.tsx                # Footer with contact info
│   ├── sections/
│   │   ├── HeroSection.tsx           # Landing section with animations
│   │   ├── AboutSection.tsx          # Company vision and key points
│   │   ├── ServicesSection.tsx       # Service offerings
│   │   ├── ValuesSection.tsx         # Core values with eco-label
│   │   ├── TestimonialsSection.tsx   # Client testimonials
│   │   └── ContactSection.tsx        # Contact form and info
│   └── ui/
│       ├── Button.tsx                # Reusable button component
│       └── Container.tsx             # Consistent layout container
├── lib/
│   ├── api.ts                        # API service layer
│   └── cms.ts                        # CMS abstraction layer
└── types/
    └── cms.ts                        # TypeScript definitions for CMS
```

## Content Structure

Based on 11H59's business description, the content is organized into these sections:

### 1. Hero Section
- **Purpose**: Immediate impact with company mission
- **Content**: "RÉVOLUTIONNER LA RESTAURATION D'ENTREPRISE"
- **Features**: Full-screen with animated elements, smooth scroll indicator

### 2. About Section
- **Purpose**: Explain the vision of convivial spaces
- **Key Points**:
  - Espaces conviviaux (convivial spaces)
  - Moments de détente (relaxation moments)
  - Restauration saine (healthy catering)

### 3. Services Section
- **Purpose**: Detail service offerings
- **Services**:
  - Corporate catering with seasonal, local products
  - Space design and layout
  - Consulting and support

### 4. Values Section
- **Purpose**: Highlight core values and eco-responsibility
- **Values**:
  - Professional committed cuisine
  - Eco-responsibility (2 Ecotables label)
  - Unifying spaces

### 5. Testimonials Section
- **Purpose**: Social proof from satisfied clients
- **Features**: Client feedback with ratings and company info

### 6. Contact Section
- **Purpose**: Lead generation and contact information
- **Features**: Contact form, company details, social links

## CMS Integration Strategy

### Current State: Static Content
The application currently uses static content defined in `/src/lib/cms.ts` through the `CMSAdapter` class.

### CMS Abstraction Layer
```typescript
// /src/lib/cms.ts
export interface CMSProvider {
  getPageContent(): Promise<PageContent>;
  getSection(type: string): Promise<PageSection | null>;
  updateSection(section: PageSection): Promise<PageSection>;
}
```

### Supported CMS Providers (Ready for Implementation)

#### 1. Strapi CMS
```typescript
const strapiProvider = new StrapiProvider(
  'https://your-strapi-url.com',
  'your-api-key'
);
cms.setProvider(strapiProvider);
```

#### 2. Contentful CMS
```typescript
const contentfulProvider = new ContentfulProvider(
  'your-space-id',
  'your-access-token'
);
cms.setProvider(contentfulProvider);
```

#### 3. Custom CMS
Implement the `CMSProvider` interface for any custom CMS solution.

### Migration Path

1. **Phase 1**: Current static implementation
2. **Phase 2**: Implement chosen CMS provider
3. **Phase 3**: Add content management interface
4. **Phase 4**: Implement caching and ISR for performance

## Performance Optimizations

### Image Optimization
- Next.js Image component for automatic optimization
- WebP format with fallbacks
- Lazy loading for below-the-fold content

### Code Splitting
- Automatic route-based splitting
- Dynamic imports for heavy components
- Tree shaking for unused code elimination

### Caching Strategy
```typescript
// Static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

// For dynamic content sections
const section = await cms.getSection('hero');
```

### SEO Optimization
- Server-side rendering for all content
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (JSON-LD) ready for implementation

## Styling Architecture

### Design System
- **Primary Color**: Orange (#f97316) - Energy and warmth
- **Secondary Color**: Green (#16a34a) - Sustainability and nature
- **Typography**: Geist Sans for clean, modern look
- **Spacing**: Consistent 8px grid system

### Component Styling
- Tailwind CSS for utility-first approach
- Custom CSS variables for brand colors
- Responsive design with mobile-first approach
- Dark mode support ready

### Animation Strategy
- Framer Motion for smooth animations
- Scroll-triggered animations with Intersection Observer
- Performance-optimized animations (transform/opacity)

## Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant colors
- **Focus Management**: Visible focus indicators
- **Smooth Scrolling**: Respects user preferences

## Development Workflow

### Environment Setup
```bash
npm install
npm run dev
```

### Build Process
```bash
npm run build
npm run start
```

### Code Quality
- TypeScript for type safety
- ESLint for code consistency
- Next.js built-in optimizations

## Future Enhancements

### Analytics Integration
- Google Analytics 4
- Conversion tracking for contact forms
- User behavior analysis

### Marketing Features
- Newsletter subscription
- Social media integration
- Blog section for content marketing

### Advanced Features
- Multi-language support (i18n)
- A/B testing framework
- Progressive Web App (PWA) capabilities

## Deployment

### Recommended Platforms
1. **Vercel**: Optimal for Next.js applications
2. **Netlify**: Good alternative with form handling
3. **AWS/Azure**: Enterprise solutions with full control

### Environment Variables
```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
CMS_API_KEY=your-cms-api-key
CONTACT_EMAIL=contact@11h59.fr
```

This architecture provides a solid foundation for 11H59's web presence while maintaining flexibility for future growth and CMS integration.