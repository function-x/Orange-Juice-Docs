define({ "api": [
  {
    "type": "post",
    "url": "/problem_list",
    "title": "创建题单",
    "version": "0.1.0",
    "name": "ProblemListCreate",
    "group": "ProblemList",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>题单名</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "groupId",
            "description": "<p>所有组ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "ProblemList",
            "optional": false,
            "field": "problemList",
            "description": "<p>题单文档</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_list_create.js",
    "groupTitle": "ProblemList"
  },
  {
    "type": "get",
    "url": "/problem/:problemListId",
    "title": "查询题单详情",
    "description": "<p>用户查看可用的题单</p>",
    "version": "0.1.0",
    "name": "ProblemListDetail",
    "group": "ProblemList",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemListId",
            "description": "<p>题单ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "ProblemList",
            "optional": false,
            "field": "problemList",
            "description": "<p>题单文档</p>"
          },
          {
            "group": "Success 200",
            "type": "Problem[]",
            "optional": false,
            "field": "problems",
            "description": "<p>对应的完整的题目</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_list_detail.js",
    "groupTitle": "ProblemList"
  },
  {
    "type": "post",
    "url": "/problem_list/:problemListId/problem",
    "title": "添加题目",
    "description": "<p>用户向题单中添加题目</p>",
    "version": "0.1.0",
    "name": "ProblemListProblemCreate",
    "group": "ProblemList",
    "permission": [
      {
        "name": "problem_list_owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjcetId",
            "optional": false,
            "field": "problemListId",
            "description": "<p>题单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemId",
            "description": "<p>题目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "ProblemList",
            "optional": false,
            "field": "problemList",
            "description": "<p>题单文档</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_list_problem_create.js",
    "groupTitle": "ProblemList"
  },
  {
    "type": "get",
    "url": "/problem_list/",
    "title": "检索可用题单",
    "description": "<p>检索可见的题单 一般是公开的题单或者自己创建的题单</p>",
    "version": "0.1.0",
    "name": "ProblemListRetrieve",
    "group": "ProblemList",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemId",
            "description": "<p>题目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>题单数目上限</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>跳过题单数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "ProblemList[]",
            "optional": false,
            "field": "problemLists",
            "description": "<p>题单列表</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_list_retrieve.js",
    "groupTitle": "ProblemList"
  },
  {
    "type": "post",
    "url": "/problem",
    "title": "创建题目",
    "description": "<p>用户创建题目</p>",
    "version": "0.1.0",
    "name": "ProblemCreate",
    "group": "Problem",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>题目标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>题目描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Problem",
            "optional": false,
            "field": "problem",
            "description": "<p>题目文档</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_create.js",
    "groupTitle": "Problem"
  },
  {
    "type": "delete",
    "url": "/problem/:problemId",
    "title": "删除题目",
    "description": "<p>用户删除自己创建的题目</p>",
    "version": "0.1.0",
    "name": "ProblemDelete",
    "group": "Problem",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemId",
            "description": "<p>题目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Problem",
            "optional": false,
            "field": "problem",
            "description": "<p>被删除的题目文档</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_delete.js",
    "groupTitle": "Problem"
  },
  {
    "type": "get",
    "url": "/problem/:problemId",
    "title": "查询题目详情",
    "description": "<p>用户查看自己创建的题目</p>",
    "version": "0.1.0",
    "name": "ProblemDetail",
    "group": "Problem",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemId",
            "description": "<p>题目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Problem",
            "optional": false,
            "field": "problem",
            "description": "<p>完整的题目文档</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_detail.js",
    "groupTitle": "Problem"
  },
  {
    "type": "get",
    "url": "/problem",
    "title": "问题检索",
    "description": "<p>用户在题库中检索自己创建的题</p>",
    "version": "0.1.0",
    "name": "ProblemRetrieve",
    "group": "Problem",
    "permission": [
      {
        "name": "User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "15",
            "description": "<p>查询的题目上限</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>跳过的题目数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Problem[]",
            "optional": false,
            "field": "problems",
            "description": "<p>问题文档列表</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_retrieve.js",
    "groupTitle": "Problem"
  },
  {
    "type": "put",
    "url": "/problem/:problemId",
    "title": "更新题目",
    "description": "<p>用户更新自己创建的题目</p>",
    "version": "0.1.0",
    "name": "ProblemUpdate",
    "group": "Problem",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemId",
            "description": "<p>题目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>问题题目</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>问题描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Problem",
            "optional": false,
            "field": "problem",
            "description": "<p>题目文档</p>"
          }
        ]
      }
    },
    "filename": "lib/problem_update.js",
    "groupTitle": "Problem"
  },
  {
    "type": "post",
    "url": "/submission",
    "title": "创建提交",
    "version": "0.1.0",
    "name": "SubmissionCreate",
    "group": "Submission",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemId",
            "description": "<p>题目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemListId",
            "description": "<p>题单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "judgerId",
            "description": "<p>裁判ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>提交类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Buffer",
            "optional": false,
            "field": "body",
            "description": "<p>提交正文</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Submission",
            "optional": false,
            "field": "submission",
            "description": "<p>新建的提交</p>"
          },
          {
            "group": "Success 200",
            "type": "ProblemList",
            "optional": false,
            "field": "problemList",
            "description": "<p>更新后的题单</p>"
          }
        ]
      }
    },
    "description": "<p>用户登录后查看题单中的题目并提交。 如果题单不存在，返回 11 如果题单存在但用户看不到，返回 11 如果用户无法提交，返回 7 如果题单中没有要交的问题，返回 11 一切正常返回 0</p>",
    "filename": "lib/submission_create.js",
    "groupTitle": "Submission"
  },
  {
    "type": "get",
    "url": "/submission/:submissionId",
    "title": "查询提交记录细节",
    "version": "0.1.0",
    "name": "SubmissionRetrieve",
    "group": "Submission",
    "permission": [
      {
        "name": "submitter|judger"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "submissionId",
            "description": "<p>提交ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "submission",
            "description": "<p>提交文档</p>"
          }
        ]
      }
    },
    "description": "<p>查询提交的细节，包括提交的正文，仅裁判与提交者能使用。</p>",
    "filename": "lib/submission_detail.js",
    "groupTitle": "Submission"
  },
  {
    "type": "get",
    "url": "/submission",
    "title": "检索提交记录",
    "description": "<p>用户检索题单中的提交</p>",
    "version": "0.1.0",
    "name": "SubmissionRetrieve",
    "group": "Submission",
    "permission": [
      {
        "name": "ProblemListView"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "problemListId",
            "description": "<p>题单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "15",
            "description": "<p>最大提交数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>跳过提交数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>提交类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Submission[]",
            "optional": false,
            "field": "submissions",
            "description": "<p>提交文档列表(剔除 submission.$.body 部分)</p>"
          }
        ]
      }
    },
    "filename": "lib/submission_retrieve.js",
    "groupTitle": "Submission"
  },
  {
    "type": "put",
    "url": "/submission/:submissionId/sentence",
    "title": "更新判决",
    "description": "<p>裁判更新提交的判决</p>",
    "version": "0.1.0",
    "name": "SubmissionSentenceUpdate",
    "group": "Submission",
    "permission": [
      {
        "name": "Judger"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "submissionId",
            "description": "<p>提交ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sentence",
            "description": "<p>新判决</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "Submission",
            "optional": false,
            "field": "submission",
            "description": "<p>新的提交文档</p>"
          }
        ]
      }
    },
    "filename": "lib/submission_sentence_update.js",
    "groupTitle": "Submission"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "创建用户",
    "version": "0.1.0",
    "name": "UserCreate",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮件地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户文档</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 2 - ValidationError": [
          {
            "group": "Error 2 - ValidationError",
            "type": "Object",
            "optional": false,
            "field": "require",
            "description": "<p>必填字段缺失</p>"
          }
        ],
        "Error 3 - DataDuplicated": [
          {
            "group": "Error 3 - DataDuplicated",
            "type": "Object",
            "optional": false,
            "field": "username",
            "description": "<p>用户名重复</p>"
          },
          {
            "group": "Error 3 - DataDuplicated",
            "type": "Object",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件重复</p>"
          }
        ]
      }
    },
    "filename": "lib/user_create.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:userId",
    "title": "用户详细信息",
    "description": "<p>查看用户的详细信息</p>",
    "version": "0.1.0",
    "name": "UserDetail",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户文档</p>"
          }
        ]
      }
    },
    "filename": "lib/user_detail.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/sign-in",
    "title": "用户登录",
    "version": "0.1.0",
    "name": "UserLogin",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户文档</p>"
          }
        ]
      }
    },
    "filename": "lib/user_login.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/sign-out",
    "title": "用户登出",
    "description": "<p>用户登出</p>",
    "version": "0.1.0",
    "name": "UserLogout",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          }
        ]
      }
    },
    "filename": "lib/user_logout.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/profile",
    "title": "用户个人信息",
    "version": "0.1.0",
    "name": "UserProfile",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户文档(个人信息)</p>"
          }
        ]
      }
    },
    "filename": "lib/user_profile_detail.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "用户检索",
    "version": "0.1.0",
    "name": "UserRetrieve",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>用户数上限</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>跳过用户数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "Success 200",
            "type": "User[]",
            "optional": false,
            "field": "users",
            "description": "<p>用户文档列表</p>"
          }
        ]
      }
    },
    "filename": "lib/user_retrieve.js",
    "groupTitle": "User"
  }
] });
