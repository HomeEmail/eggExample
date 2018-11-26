
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '昵称',
  `username` varchar(64) CHARACTER SET utf8 NOT NULL COMMENT '账户名',
  `password` varchar(64) CHARACTER SET utf8 NOT NULL COMMENT '密码',
  `age` smallint(6) DEFAULT NULL COMMENT '年龄',
  `update_at` datetime NOT NULL COMMENT '修改时间',
  `create_at` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;


