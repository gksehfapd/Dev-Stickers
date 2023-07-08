# Dev-Stickers

Gatsby를 사용하여 작업해본 Dev-Stickers 페이지 입니다.

Contentful을 통해 Stickers를 업로드 및 업데이트 할 수 있으며, Netflify를 통해 배포되었습니다.

## 프로젝트 구조

```
src
├── components/*
│   └── layout.tsx    # header
│   └── Seo.tsx       # title
│
├── pages/
│   ├── blog/*
│   │   └── {mdx.frontmatter__slug}.tsx       # src폴더 밖 blog-posts 폴더의 mdx 파일 내용을 불러옴
│   │   └── index.tsx                         # blog Layout
│   ├── products/*
│   │   └── {contentfulStickerPack.id}.tsx    # contentful에 업로드된 데이터(스티커)를 불러옴 / 이름 가격 미리보기 등
│   │
│   └── 404.tsx         # 404 페이지
│   └── about-us.tsx    # about-us 페이지
│   └── index.tsx       # 메인 컴포넌트
│
├── gatsby-types.d.ts   # Graphql을 통해 얻은 data의 types
└── style.css           # PicoCSS
```
