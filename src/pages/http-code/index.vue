<script setup>
const httpCodeDatas = [
  {
    title: '1xx (临时响应)',
    description: '表示临时响应并需要请求者继续执行操作的状态代码。',
    lists: [
      {
        code: 100,
        status: '继续',
        desc: '请求者应当继续提出请求。服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。',
      },
      {
        code: 101,
        status: '切换协议',
        desc: '请求者已要求服务器切换协议，服务器已确认并准备切换。',
      },
      {
        code: 102,
        status: '继续执行',
        desc: '由WebDAV（RFC 2518）扩展的状态码，代表处理将被继续执行。',
      },
    ],
  },
  {
    title: '2xx (成功)',
    description: '表示临时响应并需要请求者继续执行操作的状态代码。',
    lists: [
      {
        code: 200,
        status: '成功',
        desc: '服务器已成功处理了请求。通常，这表示服务器提供了请求的网页。',
      },
      {
        code: 201,
        status: '已创建',
        desc: '请求成功并且服务器创建了新的资源。',
      },
      {
        code: 202,
        status: '已接受',
        desc: '服务器已接受请求，但尚未处理。',
      },
      {
        code: 203,
        status: '非授权信息',
        desc: '服务器已成功处理了请求，但返回的信息可能来自另一来源。',
      },
      {
        code: 204,
        status: '无内容',
        desc: '服务器成功处理了请求，但没有返回任何内容。',
      },
      {
        code: 205,
        status: '重置内容',
        desc: '服务器成功处理了请求，但没有返回任何内容。',
      },
      {
        code: 206,
        status: '部分内容',
        desc: '服务器成功处理了部分 GET 请求。',
      },
      {
        code: 207,
        status: '多种状态',
        desc: '由WebDAV(RFC 2518)扩展的状态码，代表之后的消息体将是一个XML消息，并且可能依照之前子请求数量的不同，包含一系列独立的响应代码。',
      },
    ],
  },
  {
    title: '3xx (重定向)',
    description: '表示临时响应并需要请求者继续执行操作的状态代码。',
    lists: [
      {
        code: 300,
        status: '多种选择',
        desc: '针对请求，服务器可执行多种操作。服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择。',
      },
      {
        code: 301,
        status: '永久移动',
        desc: '请求的网页已永久移动到新位置。服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。',
      },
      {
        code: 302,
        status: '临时移动',
        desc: '服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。',
      },
      {
        code: 303,
        status: '查看其他位置',
        desc: '请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。',
      },
      {
        code: 304,
        status: '未修改',
        desc: '自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。',
      },
      {
        code: 305,
        status: '使用代理',
        desc: '请求者只能使用代理访问请求的网页。如果服务器返回此响应，还表示请求者应使用代理。',
      },
      {
        code: 306,
        status: '-',
        desc: '已经不再被使用。',
      },
      {
        code: 307,
        status: '临时重定向',
        desc: '服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。',
      },
    ],
  },
  {
    title: '4xx (请求错误)',
    description: '表示临时响应并需要请求者继续执行操作的状态代码。',
    lists: [
      {
        code: 400,
        status: '错误请求',
        desc: '服务器不理解请求的语法。',
      },
      {
        code: 401,
        status: '未授权',
        desc: '请求要求身份验证。对于需要登录的网页，服务器可能返回此响应。',
      },
      {
        code: 403,
        status: '禁止',
        desc: '服务器拒绝请求。',
      },
      {
        code: 404,
        status: '未找到',
        desc: '服务器找不到请求的网页。',
      },
      {
        code: 405,
        status: '方法禁用',
        desc: '禁用请求中指定的方法。',
      },
      {
        code: 406,
        status: '不接受',
        desc: '无法使用请求的内容特性响应请求的网页。',
      },
      {
        code: 407,
        status: '需要代理授权',
        desc: '此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理。',
      },
      {
        code: 408,
        status: '请求超时',
        desc: '服务器等候请求时发生超时。',
      },
      {
        code: 409,
        status: '冲突',
        desc: '服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息。',
      },
      {
        code: 410,
        status: '已删除',
        desc: '如果请求的资源已永久删除，服务器就会返回此响应。',
      },
      {
        code: 411,
        status: '需要有效长度',
        desc: '服务器不接受不含有效内容长度标头字段的请求。',
      },
      {
        code: 412,
        status: '未满足前提条件',
        desc: '服务器未满足请求者在请求中设置的其中一个前提条件。',
      },
      {
        code: 413,
        status: '请求实体过大',
        desc: '服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。',
      },
      {
        code: 414,
        status: '请求的 URI 过长',
        desc: '请求的 URI（通常为网址）过长，服务器无法处理。',
      },
      {
        code: 415,
        status: '不支持的媒体类型',
        desc: '请求的格式不受请求页面的支持。',
      },
      {
        code: 416,
        status: '请求范围不符合要求',
        desc: '如果页面无法提供请求的范围，则服务器会返回此状态代码。',
      },
      {
        code: 417,
        status: '未满足期望值',
        desc: '服务器未满足"期望"请求标头字段的要求。',
      },
      {
        code: 421,
        status: '连接过多',
        desc: '从当前客户端所在的iP地址到服务器的连接数超过了服务器许可的最大范围。通常，这里的iP地址指的是从服务器上看到的客户端地址（比如用户的网关或者代理服务器地址）。在这种情况下，连接数的计算可能涉及到不止一个终端用户。',
      },
      {
        code: 422,
        status: '错误实体',
        desc: '请求格式正确，但是由于含有语义错误，无法响应。（RFC 4918 WebDAV）',
      },
      {
        code: 423,
        status: '锁定',
        desc: '当前资源被锁定。（RFC 4918 WebDAV）',
      },
      {
        code: 424,
        status: '错误接洽关系',
        desc: '由于之前的某个请求发生的错误，导致当前请求失败，例如 PROPPATCH。（RFC 4918 WebDAV）',
      },
      {
        code: 425,
        status: '无序集合',
        desc: '在WebDav Advanced Collections 草案中定义，但是未出现在《WebDAV 顺序集协议》（RFC 3658）中。',
      },
      {
        code: 426,
        status: '进级请求',
        desc: '客户端应当切换到TLS/1.0。（RFC 2817）',
      },
      {
        code: 428,
        status: '要求先决条件',
        desc: '先决条件是客户端发送 HTTP 请求时，如果想要请求能成功必须满足一些预设的条件。',
      },
      {
        code: 429,
        status: '太多请求',
        desc: '当你需要限制客户端请求某个服务数量时，该状态码就很有用，也就是请求速度限制。',
      },
      {
        code: 431,
        status: '请求头字段太大',
        desc: '某些情况下，客户端发送 HTTP 请求头会变得很大，那么服务器可发送 431 Request Header Fields Too Large 来指明该问题。',
      },
      {
        code: 451,
        status: '因法律原因而被官方审查',
        desc: '由于法律原因产生的后果而被官方拒绝访问',
      },
    ],
  },
  {
    title: '5xx (服务器错误)',
    description: '表示临时响应并需要请求者继续执行操作的状态代码。',
    lists: [
      {
        code: 500,
        status: '服务器内部错误',
        desc: '服务器遇到错误，无法完成请求。',
      },
      {
        code: 501,
        status: '尚未实施',
        desc: '服务器不具备完成请求的功能。例如，服务器无法识别请求方法时可能会返回此代码。',
      },
      {
        code: 502,
        status: '错误网关',
        desc: '服务器作为网关或代理，从上游服务器收到无效响应。',
      },
      {
        code: 503,
        status: '服务不可用',
        desc: '服务器目前无法使用（由于超载或停机维护）。通常，这只是暂时状态。',
      },
      {
        code: 504,
        status: '网关超时',
        desc: '服务器作为网关或代理，但是没有及时从上游服务器收到请求。',
      },
      {
        code: 505,
        status: 'HTTP 版本不受支持',
        desc: '服务器不支持请求中所用的 HTTP 协议版本。',
      },
      {
        code: 506,
        status: '变体协商',
        desc: '由《透明内容协商协议》（RFC 2295）扩展，代表服务器存在内部配置错误：被请求的协商变元资源被配置为在透明内容协商中使用自己，因此在一个协商处理中不是一个合适的重点。',
      },
      {
        code: 507,
        status: '存储不足',
        desc: '服务器无法存储完成请求所必须的内容。这个状况被认为是临时的。WebDAV (RFC 4918)',
      },
      {
        code: 509,
        status: '超过带宽限制',
        desc: '服务器达到带宽限制。这不是一个官方的状态码，但是仍被广泛使用。',
      },
      {
        code: 510,
        status: '不可拓展',
        desc: '获取资源所需要的策略并没有满足。（RFC 2774）',
      },
      {
        code: 511,
        status: '要求网络认证',
        desc: '如果你频繁使用笔记本和智能手机，你可能会注意到大量的公用 WIFI 服务要求你必须接受一些协议或者必须登录后才能使用。',
      },
    ],
  },
  {
    title: '6xx',
    description: '表示临时响应并需要请求者继续执行操作的状态代码。',
    lists: [
      {
        code: 600,
        status: '没有返回响应头部',
        desc: '源站没有返回响应头部，只返回实体内容',
      },
    ],
  },
]
const columns = [
  {
    title: '代码',
    colKey: 'code',
    width: '80',
  },
  {
    title: '状态',
    colKey: 'status',
    width: '210',
  },
  {
    title: '描述',
    colKey: 'desc',
  },
]
</script>

<template>
  <section class="http-code-wrapper">
    <t-card title="HTTP 协议状态码" :bordered="false" shadow>
      <template v-for="(item, index) in httpCodeDatas" :key="index">
        <div class="title">
          {{ item.title }}
        </div>
        <p class="description">
          {{ item.description }}
        </p>
        <t-table class="http-code-table" :data="item.lists" :row-key="String(index)" :columns="columns" :bordered="true" :stripe="true" :hover="true" />
      </template>
    </t-card>
  </section>
</template>

<style lang="less">
.http-code-wrapper {
  padding: 20px 0 40px;
  .title {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .description {
    color: #666;
    margin: 0 0 14px;
  }
  .http-code-table {
    margin-bottom: 30px;
  }
}
</style>
