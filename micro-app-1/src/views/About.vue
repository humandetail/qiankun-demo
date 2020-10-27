<template>
  <div class="about">
    <h1>About Micro-app-1</h1>

    <div class="content">
      <p>微前端架构具备以下几个核心价值：</p>
      <ul>
        <li>
          <p>
            技术栈无关
            <br />主框架不限制接入应用的技术栈，微应用具备完全自主权
          </p>
        </li>
        <li>
          <p>
            独立开发、独立部署
            <br />微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
          </p>
        </li>
        <li>
          <p>增量升级</p>
          <p>在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略</p>
        </li>
        <li>
          <p>
            独立运行时
            <br />每个微应用之间状态隔离，运行时状态不共享
          </p>
        </li>
      </ul>
      <p>
        微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用(
        <a
          href="https://www.youtube.com/watch?v=pU1gXA0rfwc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Monolith
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            class="__dumi-default-external-link-icon"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            />
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            />
          </svg>
        </a>)后，随之而来的应用不可维护的问题。这类问题在企业级 Web 应用中尤其常见。
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 0 30px;
  text-align: left;
}

.content p {
  margin-top: 25px;
}

.content ul {
  margin-left: 2em;
}
</style>