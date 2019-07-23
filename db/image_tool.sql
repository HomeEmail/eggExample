/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : image_tool

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2019-07-24 01:59:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `album`
-- ----------------------------
DROP TABLE IF EXISTS `album`;
CREATE TABLE `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '相册id，0表示公共相册',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id,0的话那么此记录就是公共相册',
  `name` varchar(64) NOT NULL COMMENT '相册名称',
  `comment` varchar(128) DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`),
  KEY `user_id_index` (`user_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='相册';

-- ----------------------------
-- Records of album
-- ----------------------------
INSERT INTO `album` VALUES ('1', '1', '人物', '');
INSERT INTO `album` VALUES ('2', '1', '可爱', '');
INSERT INTO `album` VALUES ('3', '1', '风景', '');
INSERT INTO `album` VALUES ('4', '1', '手机ui', '');
INSERT INTO `album` VALUES ('5', '1', '电视ui', '');

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
  `disable` tinyint(1) DEFAULT '0' COMMENT '0可用，1删除',
  PRIMARY KEY (`id`),
  KEY `user_id_index` (`user_id`) COMMENT '用户id索引',
  KEY `labe_idl_index` (`label_id`) USING BTREE,
  KEY `album_id_index` (`album_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COMMENT='图片记录';

-- ----------------------------
-- Records of images
-- ----------------------------
INSERT INTO `images` VALUES ('1', '1', 'a21999018_01000.jpg', '/undefined/20190720/156360933686069.jpg', '0', '3', '0');
INSERT INTO `images` VALUES ('2', '1', 'mp23627612_1437451852870_2.gif', '/undefined/20190720/1563609564996730.gif', '0', '2', '0');
INSERT INTO `images` VALUES ('3', '1', 'maxerror.png', '/1/20190720/15636096748576554.png', '0', '0', '0');
INSERT INTO `images` VALUES ('4', '1', 'QQ截图20181215214723.png', '/1/20190720/15636096785893726.png', '0', '0', '0');
INSERT INTO `images` VALUES ('5', '1', '4.18(头图）.jpg', '/1/20190722/15637280513473042.jpg', '0', '0', '0');
INSERT INTO `images` VALUES ('6', '1', '1605640.jpg', '/1/20190722/15637284817972879.jpg', '0', '0', '0');
INSERT INTO `images` VALUES ('7', '1', '活动首页.jpg', '/1/20190722/15637287307562491.jpg', '0', '0', '0');
INSERT INTO `images` VALUES ('8', '1', '三等奖.jpg', '/1/20190722/1563728910226636.jpg', '0', '0', '0');
INSERT INTO `images` VALUES ('9', '1', '四等奖.jpg', '/1/20190722/15637289102297166.jpg', '0', '0', '0');
INSERT INTO `images` VALUES ('10', '1', '启蒙幼教-焦点.png', '/1/20190722/15637289977559350.png', '0', '2', '0');
INSERT INTO `images` VALUES ('11', '1', '订购页面.jpg', '/1/20190722/15637289977525920.jpg', '0', '1', '0');
INSERT INTO `images` VALUES ('12', '1', '订购页面-退出-焦点.png', '/1/20190722/15638075104399255.png', '0', '2', '0');
INSERT INTO `images` VALUES ('13', '1', '新开心学堂（首页）.jpg', '/1/20190723/15638146592985871.jpg', '0', '5', '0');
INSERT INTO `images` VALUES ('14', '1', '新开心学堂（小学）.jpg', '/1/20190723/15638146593088217.jpg', '0', '5', '0');
INSERT INTO `images` VALUES ('15', '1', '新开心学堂（艺术）.jpg', '/1/20190723/15638146593145271.jpg', '0', '5', '0');
INSERT INTO `images` VALUES ('16', '1', '新开心学堂（探索）.jpg', '/1/20190723/15638146593028906.jpg', '0', '5', '0');
INSERT INTO `images` VALUES ('17', '1', '新开心学堂（幼教).jpg', '/1/20190723/1563814659329268.jpg', '0', '5', '0');
INSERT INTO `images` VALUES ('18', '1', '新开心学堂（中学）.jpg', '/1/20190723/1563816296306944.jpg', '0', '5', '0');
INSERT INTO `images` VALUES ('19', '1', 'WechatIMG16.jpg', '/1/20190723/15638923815991935.jpg', '0', '2', '0');
INSERT INTO `images` VALUES ('20', '1', '4.jpg', '/1/20190723/15638925217175357.jpg', '0', '4', '0');
INSERT INTO `images` VALUES ('21', '1', '1.jpg', '/1/20190723/15638931494476702.jpg', '0', '1', '0');
INSERT INTO `images` VALUES ('22', '1', '2.jpg', '/1/20190724/15639046330827313.jpg', '0', '1', '0');

-- ----------------------------
-- Table structure for `image_colors`
-- ----------------------------
DROP TABLE IF EXISTS `image_colors`;
CREATE TABLE `image_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图片颜色记录id',
  `images_id` int(11) NOT NULL DEFAULT '0' COMMENT '图片id',
  `weights` tinyint(4) DEFAULT '1' COMMENT '权重：1-5，越小代表此颜色在图片里越多越主要',
  `color` char(7) DEFAULT '#ffffff' COMMENT 'hex颜色值,如#ff0232',
  `h` float(8,5) unsigned DEFAULT '0.00000' COMMENT 'hue色度:0-360',
  `s` float(7,6) unsigned DEFAULT '0.000000' COMMENT 'saturation饱和度:0-1',
  `v` float(7,6) unsigned DEFAULT '1.000000' COMMENT 'value:0-1',
  PRIMARY KEY (`id`),
  KEY `images_id_index` (`images_id`) COMMENT '图片记录id索引',
  KEY `h_index` (`h`) USING BTREE,
  KEY `s_index` (`s`) USING BTREE,
  KEY `v_index` (`v`) USING BTREE,
  KEY `weights_index` (`weights`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=109 DEFAULT CHARSET=utf8 COMMENT='某张图的颜色记录';

-- ----------------------------
-- Records of image_colors
-- ----------------------------
INSERT INTO `image_colors` VALUES ('1', '1', '1', '#153208', '101.42857', '0.840000', '0.196078');
INSERT INTO `image_colors` VALUES ('2', '1', '2', '#c42274', '329.62964', '0.826531', '0.768627');
INSERT INTO `image_colors` VALUES ('3', '1', '5', '#7e248e', '290.94339', '0.746479', '0.556863');
INSERT INTO `image_colors` VALUES ('4', '1', '3', '#34b30d', '105.90361', '0.927374', '0.701961');
INSERT INTO `image_colors` VALUES ('5', '1', '4', '#1b8309', '111.14754', '0.931298', '0.513725');
INSERT INTO `image_colors` VALUES ('6', '2', '1', '#d9ba3f', '47.92208', '0.709677', '0.850980');
INSERT INTO `image_colors` VALUES ('7', '2', '2', '#98b1d1', '213.68420', '0.272727', '0.819608');
INSERT INTO `image_colors` VALUES ('8', '2', '3', '#483833', '14.28571', '0.291667', '0.282353');
INSERT INTO `image_colors` VALUES ('9', '2', '4', '#b95c2f', '19.56522', '0.745946', '0.725490');
INSERT INTO `image_colors` VALUES ('10', '2', '5', '#5c8bcb', '214.59459', '0.546798', '0.796078');
INSERT INTO `image_colors` VALUES ('11', '3', '1', '#e6eaea', '180.00000', '0.017094', '0.917647');
INSERT INTO `image_colors` VALUES ('12', '3', '3', '#89a2a5', '186.42857', '0.169697', '0.647059');
INSERT INTO `image_colors` VALUES ('13', '3', '2', '#527c82', '187.50000', '0.369231', '0.509804');
INSERT INTO `image_colors` VALUES ('14', '3', '4', '#9e5b3a', '19.80000', '0.632911', '0.619608');
INSERT INTO `image_colors` VALUES ('15', '3', '5', '#b88550', '30.57692', '0.565217', '0.721569');
INSERT INTO `image_colors` VALUES ('16', '4', '1', '#f4f6f8', '210.00000', '0.016129', '0.972549');
INSERT INTO `image_colors` VALUES ('17', '4', '2', '#374259', '220.58824', '0.382022', '0.349020');
INSERT INTO `image_colors` VALUES ('18', '4', '3', '#b1d9f7', '205.71429', '0.283401', '0.968627');
INSERT INTO `image_colors` VALUES ('19', '4', '4', '#b2422d', '9.47368', '0.747191', '0.698039');
INSERT INTO `image_colors` VALUES ('20', '4', '5', '#df9a53', '30.42857', '0.627803', '0.874510');
INSERT INTO `image_colors` VALUES ('21', '5', '1', '#3a6331', '109.20000', '0.505051', '0.388235');
INSERT INTO `image_colors` VALUES ('22', '5', '4', '#dc221e', '1.26316', '0.863636', '0.862745');
INSERT INTO `image_colors` VALUES ('23', '5', '5', '#edca7a', '41.73913', '0.485232', '0.929412');
INSERT INTO `image_colors` VALUES ('24', '5', '2', '#f2ede8', '30.00000', '0.041322', '0.949020');
INSERT INTO `image_colors` VALUES ('25', '5', '3', '#f6c012', '45.78947', '0.926829', '0.964706');
INSERT INTO `image_colors` VALUES ('26', '6', '1', '#f7f6f6', '0.00000', '0.004049', '0.968627');
INSERT INTO `image_colors` VALUES ('27', '6', '3', '#f5ce16', '49.50673', '0.910204', '0.960784');
INSERT INTO `image_colors` VALUES ('28', '6', '4', '#b74b33', '10.90909', '0.721311', '0.717647');
INSERT INTO `image_colors` VALUES ('29', '6', '2', '#302727', '0.00000', '0.187500', '0.188235');
INSERT INTO `image_colors` VALUES ('30', '6', '5', '#99999c', '240.00000', '0.019231', '0.611765');
INSERT INTO `image_colors` VALUES ('31', '7', '1', '#4b306b', '267.45764', '0.551402', '0.419608');
INSERT INTO `image_colors` VALUES ('32', '7', '2', '#ddb370', '36.88073', '0.493213', '0.866667');
INSERT INTO `image_colors` VALUES ('33', '7', '4', '#4a2815', '21.50943', '0.716216', '0.290196');
INSERT INTO `image_colors` VALUES ('34', '7', '3', '#9471bf', '266.92307', '0.408377', '0.749020');
INSERT INTO `image_colors` VALUES ('35', '7', '5', '#62b0cc', '195.84906', '0.519608', '0.800000');
INSERT INTO `image_colors` VALUES ('36', '8', '1', '#c79bb2', '328.63635', '0.221106', '0.780392');
INSERT INTO `image_colors` VALUES ('37', '8', '2', '#150f17', '285.00000', '0.347826', '0.090196');
INSERT INTO `image_colors` VALUES ('38', '8', '3', '#6d2f42', '341.61292', '0.568807', '0.427451');
INSERT INTO `image_colors` VALUES ('39', '8', '4', '#755c9c', '263.43750', '0.410256', '0.611765');
INSERT INTO `image_colors` VALUES ('40', '8', '5', '#5badb4', '184.71910', '0.494444', '0.705882');
INSERT INTO `image_colors` VALUES ('41', '9', '1', '#c79bb3', '327.27274', '0.221106', '0.780392');
INSERT INTO `image_colors` VALUES ('42', '9', '4', '#26a2e1', '200.21390', '0.831111', '0.882353');
INSERT INTO `image_colors` VALUES ('43', '9', '2', '#150f17', '285.00000', '0.347826', '0.090196');
INSERT INTO `image_colors` VALUES ('44', '9', '3', '#6d2f43', '340.64517', '0.568807', '0.427451');
INSERT INTO `image_colors` VALUES ('45', '9', '5', '#2d74c4', '211.78809', '0.770408', '0.768627');
INSERT INTO `image_colors` VALUES ('46', '11', '1', '#e4d0b9', '32.09302', '0.188596', '0.894118');
INSERT INTO `image_colors` VALUES ('47', '11', '2', '#5b2b5e', '296.47058', '0.542553', '0.368627');
INSERT INTO `image_colors` VALUES ('48', '11', '3', '#301f58', '257.89474', '0.647727', '0.345098');
INSERT INTO `image_colors` VALUES ('49', '11', '4', '#dbad1b', '45.62500', '0.876712', '0.858824');
INSERT INTO `image_colors` VALUES ('50', '11', '5', '#70a2b0', '193.12500', '0.363636', '0.690196');
INSERT INTO `image_colors` VALUES ('51', '10', '1', '#9a53c3', '278.03571', '0.574359', '0.764706');
INSERT INTO `image_colors` VALUES ('52', '10', '2', '#642ca4', '268.00000', '0.731707', '0.643137');
INSERT INTO `image_colors` VALUES ('53', '10', '3', '#7c3cb2', '272.54236', '0.662921', '0.698039');
INSERT INTO `image_colors` VALUES ('54', '10', '4', '#743cac', '270.00000', '0.651163', '0.674510');
INSERT INTO `image_colors` VALUES ('55', '10', '5', '#8144b6', '272.10526', '0.626374', '0.713725');
INSERT INTO `image_colors` VALUES ('56', '12', '1', '#fce404', '54.19355', '0.984127', '0.988235');
INSERT INTO `image_colors` VALUES ('57', '12', '3', '#ffe404', '53.54582', '0.984314', '1.000000');
INSERT INTO `image_colors` VALUES ('58', '12', '5', '#ffe404', '53.54582', '0.984314', '1.000000');
INSERT INTO `image_colors` VALUES ('59', '12', '2', '#fcec04', '56.12903', '0.984127', '0.988235');
INSERT INTO `image_colors` VALUES ('60', '12', '4', '#ffe404', '53.54582', '0.984314', '1.000000');
INSERT INTO `image_colors` VALUES ('61', '13', '1', '#705292', '268.12500', '0.438356', '0.572549');
INSERT INTO `image_colors` VALUES ('62', '13', '2', '#e6c6b3', '22.35294', '0.221739', '0.901961');
INSERT INTO `image_colors` VALUES ('63', '13', '3', '#6ad4d1', '178.30190', '0.500000', '0.831373');
INSERT INTO `image_colors` VALUES ('64', '13', '4', '#47371a', '38.66667', '0.633803', '0.278431');
INSERT INTO `image_colors` VALUES ('65', '13', '5', '#174169', '209.26830', '0.780952', '0.411765');
INSERT INTO `image_colors` VALUES ('66', '14', '1', '#432d6f', '260.00000', '0.594595', '0.435294');
INSERT INTO `image_colors` VALUES ('67', '14', '2', '#eaa987', '20.60606', '0.423077', '0.917647');
INSERT INTO `image_colors` VALUES ('68', '14', '3', '#51cbdd', '187.71429', '0.633484', '0.866667');
INSERT INTO `image_colors` VALUES ('69', '14', '4', '#714fc1', '257.89474', '0.590674', '0.756863');
INSERT INTO `image_colors` VALUES ('70', '14', '5', '#301f0b', '32.43243', '0.770833', '0.188235');
INSERT INTO `image_colors` VALUES ('71', '15', '1', '#7a5b98', '270.49179', '0.401316', '0.596078');
INSERT INTO `image_colors` VALUES ('72', '15', '2', '#20252e', '218.57143', '0.304348', '0.180392');
INSERT INTO `image_colors` VALUES ('73', '15', '3', '#e6e8cb', '64.13793', '0.125000', '0.909804');
INSERT INTO `image_colors` VALUES ('74', '15', '4', '#785e25', '41.20482', '0.691667', '0.470588');
INSERT INTO `image_colors` VALUES ('75', '15', '5', '#e196ae', '340.79999', '0.333333', '0.882353');
INSERT INTO `image_colors` VALUES ('76', '16', '1', '#9170a9', '274.73685', '0.337278', '0.662745');
INSERT INTO `image_colors` VALUES ('77', '16', '2', '#242c3b', '219.13043', '0.389831', '0.231373');
INSERT INTO `image_colors` VALUES ('78', '16', '3', '#ebe4d5', '40.90909', '0.093617', '0.921569');
INSERT INTO `image_colors` VALUES ('79', '16', '4', '#845f2b', '35.05618', '0.674242', '0.517647');
INSERT INTO `image_colors` VALUES ('80', '16', '5', '#521583', '273.27274', '0.839695', '0.513725');
INSERT INTO `image_colors` VALUES ('81', '17', '1', '#9875ae', '276.84210', '0.327586', '0.682353');
INSERT INTO `image_colors` VALUES ('82', '17', '2', '#bfa926', '51.37255', '0.801047', '0.749020');
INSERT INTO `image_colors` VALUES ('83', '17', '3', '#d2e3b9', '84.28571', '0.185022', '0.890196');
INSERT INTO `image_colors` VALUES ('84', '17', '4', '#2f545a', '188.37209', '0.477778', '0.352941');
INSERT INTO `image_colors` VALUES ('85', '17', '5', '#58296f', '280.28571', '0.630631', '0.435294');
INSERT INTO `image_colors` VALUES ('86', '18', '1', '#f1bd81', '32.14286', '0.464730', '0.945098');
INSERT INTO `image_colors` VALUES ('87', '18', '5', '#6062d0', '238.92857', '0.538462', '0.815686');
INSERT INTO `image_colors` VALUES ('88', '18', '4', '#311f0c', '30.81081', '0.755102', '0.192157');
INSERT INTO `image_colors` VALUES ('89', '18', '3', '#63bae4', '199.53488', '0.565789', '0.894118');
INSERT INTO `image_colors` VALUES ('90', '18', '2', '#432973', '261.08109', '0.643478', '0.450980');
INSERT INTO `image_colors` VALUES ('91', '19', '1', '#2f2c30', '285.00000', '0.083333', '0.188235');
INSERT INTO `image_colors` VALUES ('92', '19', '2', '#d2ae86', '31.57895', '0.361905', '0.823529');
INSERT INTO `image_colors` VALUES ('93', '19', '3', '#677aa0', '220.00000', '0.356250', '0.627451');
INSERT INTO `image_colors` VALUES ('94', '19', '4', '#879cc5', '219.67741', '0.314721', '0.772549');
INSERT INTO `image_colors` VALUES ('95', '19', '5', '#a85c2c', '23.22581', '0.738095', '0.658824');
INSERT INTO `image_colors` VALUES ('96', '20', '1', '#344c66', '211.20000', '0.490196', '0.400000');
INSERT INTO `image_colors` VALUES ('97', '20', '2', '#e9e4e5', '348.00000', '0.021459', '0.913725');
INSERT INTO `image_colors` VALUES ('98', '20', '3', '#c84d69', '346.34146', '0.615000', '0.784314');
INSERT INTO `image_colors` VALUES ('99', '20', '4', '#ceb147', '47.11111', '0.655340', '0.807843');
INSERT INTO `image_colors` VALUES ('100', '20', '5', '#879aa1', '196.15385', '0.161491', '0.631373');
INSERT INTO `image_colors` VALUES ('101', '21', '3', '#c9bba9', '33.75000', '0.159204', '0.788235');
INSERT INTO `image_colors` VALUES ('102', '21', '4', '#b5a396', '25.16129', '0.171271', '0.709804');
INSERT INTO `image_colors` VALUES ('103', '21', '2', '#bda074', '36.16438', '0.386243', '0.741176');
INSERT INTO `image_colors` VALUES ('104', '22', '1', '#efefee', '60.00000', '0.004184', '0.937255');
INSERT INTO `image_colors` VALUES ('105', '22', '2', '#524241', '3.52941', '0.207317', '0.321569');
INSERT INTO `image_colors` VALUES ('106', '22', '3', '#bba897', '28.33333', '0.192513', '0.733333');
INSERT INTO `image_colors` VALUES ('107', '22', '4', '#c1a36f', '38.04878', '0.424870', '0.756863');
INSERT INTO `image_colors` VALUES ('108', '22', '5', '#848488', '240.00000', '0.029412', '0.533333');

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
  `disable` tinyint(1) DEFAULT '0' COMMENT '帐号状态0可使用，1不可使用',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '宝宝', '1', '591694604@qq.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '18', '2019-06-20 00:01:58', '2019-06-20 00:02:02', '0');
