/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : image_tool

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2019-07-09 23:46:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `album`
-- ----------------------------
DROP TABLE IF EXISTS `album`;
CREATE TABLE `album` (
  `id` int(11) NOT NULL COMMENT '相册id，0表示公共相册',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id,0的话那么此记录就是公共相册',
  `name` varchar(64) NOT NULL COMMENT '相册名称',
  `comment` varchar(128) DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`),
  KEY `user_id_index` (`user_id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='相册';

-- ----------------------------
-- Records of album
-- ----------------------------

-- ----------------------------
-- Table structure for `images`
-- ----------------------------
DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图片id',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id',
  `name` varchar(128) DEFAULT NULL COMMENT '图片名称',
  `path` varchar(256) DEFAULT NULL COMMENT '图片存储路径',
  `label_id` int(11) DEFAULT '0' COMMENT '标签id，0表示未分配标签id',
  `album_id` int(11) DEFAULT '0' COMMENT '相册id,0表示未分配相册id',
  PRIMARY KEY (`id`),
  KEY `user_id_index` (`user_id`) COMMENT '用户id索引',
  KEY `labe_idl_index` (`label_id`) USING BTREE,
  KEY `album_id_index` (`album_id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='图片记录';

-- ----------------------------
-- Records of images
-- ----------------------------

-- ----------------------------
-- Table structure for `image_colors`
-- ----------------------------
DROP TABLE IF EXISTS `image_colors`;
CREATE TABLE `image_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图片颜色记录id',
  `images_id` int(11) NOT NULL DEFAULT '0' COMMENT '图片id',
  `color` char(7) DEFAULT '#ffffff' COMMENT 'hex颜色值,如#ff0232',
  `h` float(8,5) unsigned DEFAULT '0.00000' COMMENT 'hue色度:0-360',
  `s` float(7,6) unsigned DEFAULT '0.000000' COMMENT 'saturation饱和度:0-1',
  `v` float(7,6) unsigned DEFAULT '1.000000' COMMENT 'value:0-1',
  PRIMARY KEY (`id`),
  KEY `images_id_index` (`images_id`) COMMENT '图片记录id索引',
  KEY `h_index` (`h`) USING BTREE,
  KEY `s_index` (`s`) USING BTREE,
  KEY `v_index` (`v`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='某张图的颜色记录';

-- ----------------------------
-- Records of image_colors
-- ----------------------------

-- ----------------------------
-- Table structure for `label`
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '标签id',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id,0的话那么此记录就是公共标签',
  `name` varchar(64) NOT NULL COMMENT '标签名称',
  `comment` varchar(128) DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`),
  KEY `user_id_index` (`user_id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='标签表';

-- ----------------------------
-- Records of label
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '宝宝', '1', 'navi', '7c4a8d09ca3762af61e59520943dc26494f8941b', '18', '2019-06-20 00:01:58', '2019-06-20 00:02:02', '');
