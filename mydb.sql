/*
Navicat MySQL Data Transfer

Source Server         : yelina
Source Server Version : 50715
Source Host           : localhost:3306
Source Database       : mydb

Target Server Type    : MYSQL
Target Server Version : 50715
File Encoding         : 65001

Date: 2016-12-06 18:43:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for flower
-- ----------------------------
DROP TABLE IF EXISTS `flower`;
CREATE TABLE `flower` (
  `article_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `article_year` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `article_author` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `article_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `article_href` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `article_thumbnail` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  `article_content` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of flower
-- ----------------------------
INSERT INTO `flower` VALUES ('1', 'haapy', 'asdf', 'dfasdf', 'sdfgadf', 'sdafasdfasf', 'sadfasfasd');
INSERT INTO `flower` VALUES ('2', 'test2', 'test2', 'test222222', 'asdf', 'tewtsta2f2a12fa12df', 'kjjchaslekfqjdfkajskldf3653456d4sf56a4s5d3f4as56d4f3as51df6');
INSERT INTO `flower` VALUES ('3', 'test33', 'test33', 'test3333333', 'asdf', 'test3333333333', 'test333333333333asdf3asdfasdfasdfasdf3as3df3as3df3333');
INSERT INTO `flower` VALUES ('4', '开心', '开开心心', '阿斯顿发斯蒂芬', '多发点', '按时打发似的', '此图原载《烟云集绘册》（《石渠宝笈续编》著录）。无款，签题黄居寀作。居寀为筌子。《圣朝名画评》云：黄居寀亦善画花竹毛羽，多与筌共为之，其气骨意思，深有父风。孟昶时，画四时花雀图数本，当世称绝。评曰：居寀之画鹤，多得筌骨。其有佳处，亦不能决其高下。至于花竹禽雀，皆不失筌啊都是发生地方');
INSERT INTO `flower` VALUES ('5', '五代', '黄居寀', '晚荷郭索图', './01/html/000/013.htm', '03/pics/002B.jpg', '此图原载《烟云集绘册》（《石渠宝笈续编》著录）。无款，签题黄居寀作。居寀为筌子。《圣朝名画评》云：黄居寀亦善画花竹毛羽，多与筌共为之，其气骨意思，深有父风。孟昶时，画四时花雀图数本，当世称绝。评曰：居寀之画鹤，多得筌骨。其有佳处，亦不能决其高下。至于花竹禽雀，皆不失筌法。');
INSERT INTO `flower` VALUES ('6', '五代', '黄居寀', '晚荷郭索图', './01/html/000/013.htm', '03/pics/002B.jpg', '此图原载《烟云集绘册》（《石渠宝笈续编》著录）。无款，签题黄居寀作。居寀为筌子。《圣朝名画评》云：黄居寀亦善画花竹毛羽，多与筌共为之，其气骨意思，深有父风。孟昶时，画四时花雀图数本，当世称绝。评曰：居寀之画鹤，多得筌骨。其有佳处，亦不能决其高下。至于花竹禽雀，皆不失筌法。');
INSERT INTO `flower` VALUES ('7', '近代', '普希金', '囚徒', './01/html/000/013.htm', '03/pics/002B.jpg', '我们原是自由飞翔的鸟，飞去吧！飞到乌云背后明媚的山峦，飞到那里，到那蓝色的海角，只有风在飞舞，还有我作伴。');
