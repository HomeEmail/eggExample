# Host: localhost  (Version: 5.5.39)
# Date: 2019-06-19 18:02:28
# Generator: MySQL-Front 5.3  (Build 4.13)

/*!40101 SET NAMES utf8 */;

#
# Source for table "image_colors"
#

DROP TABLE IF EXISTS `image_colors`;
CREATE TABLE `image_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `images_id` int(11) NOT NULL DEFAULT '0' COMMENT '图片id',
  `color` char(7) DEFAULT NULL COMMENT 'hex颜色值,如#ff0232',
  PRIMARY KEY (`id`),
  KEY `images_id_index` (`images_id`) COMMENT '图片记录id索引',
  KEY `color_index` (`color`) COMMENT '颜色索引'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='某张图的颜色记录';

#
# Data for table "image_colors"
#

/*!40000 ALTER TABLE `image_colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `image_colors` ENABLE KEYS */;

#
# Source for table "images"
#

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id',
  `name` varchar(128) DEFAULT NULL COMMENT '图片名称',
  `path` varchar(256) DEFAULT NULL COMMENT '图片存储路径',
  PRIMARY KEY (`id`),
  KEY `user_id_index` (`user_id`) COMMENT '用户id索引'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='图片记录';

#
# Data for table "images"
#

/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;

#
# Source for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(64) DEFAULT NULL COMMENT '昵称',
  `role` tinyint(1) NOT NULL DEFAULT '0' COMMENT '用户角色0普通用户，1超级管理员',
  `username` varchar(64) NOT NULL COMMENT '账户名',
  `password` varchar(64) NOT NULL COMMENT '密码',
  `age` smallint(6) DEFAULT NULL COMMENT '年龄',
  `update_at` datetime NOT NULL COMMENT '修改时间',
  `create_at` datetime NOT NULL COMMENT '创建时间',
  `disable` bit(1) DEFAULT b'0' COMMENT '帐号状态0可使用，1不可使用',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

INSERT INTO `user` VALUES (1,'宝宝',1,'navi','7c4a8d09ca3762af61e59520943dc26494f8941b',18,'0000-00-00 00:00:00','0000-00-00 00:00:00',b'0');
