# [패션행복] 다문화 가정의 우울증 극복을 위한 커뮤니티 서비스

### 폴더 구조

<pre>
<code>
│
├─ washer-WEB
│   │
│   ├─ ..
│   │   │ 
│   │   ├─ ..
│   │   │
│   │   └─ .. 이하 동일
│   │   
│   ├─ .. 이하 동일
│ 
│ 
</code>
</pre>

### 코드 정리

emotion.js를 사용하기 위해서는 상단에 아래와 같이 선언한 후 사용해야 함.

<pre>
<code>
/\*_ @jsx jsx _/
import { jsx, css } from '@emotion/react'
</code>
</pre>

단순한 주석처럼 보이지만, babel에게 React.createElement 대신 jsx라는 함수로 변환하라는 뜻임. @emotion/react를 사용하기 위해서는 필수.
위에 코드가 오류날 경우 아래로 변경해서 진행함.

<pre>
<code>
/\*_ @jsxImportSource @emotion/react _/
import { jsx, css } from '@emotion/react'
</code>
</pre>

출처: [emotion.js 소개 및 사용법](https://www.howdy-mj.me/css/emotionjs-intro)
