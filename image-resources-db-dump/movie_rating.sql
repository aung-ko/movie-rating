-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 08, 2018 at 02:50 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.2.7-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie_rating`
--

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Action', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(2, 'Drama', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(3, 'Fantasy', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(4, 'Science Fiction', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(5, 'Mystery', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(6, 'Adventure', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(7, 'Comedy', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(8, 'Romance', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(9, 'Thriller', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(10, 'Horror', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(11, 'Musical', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(12, 'Biographical', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(13, 'Documentry', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(14, 'War', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(15, 'Superhero', '2018-05-13 04:30:00', '2018-05-13 04:30:00'),
(16, 'Animation', '2018-05-13 04:30:00', '2018-05-13 04:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2018_05_12_161944_create_roles_table', 1),
(4, '2018_05_12_184159_create_movies_table', 1),
(5, '2018_05_19_181115_create_genres_table', 1),
(6, '2018_05_19_181845_create_movie_genres', 1),
(7, '2018_05_27_102239_create_statuses_table', 1),
(8, '2018_06_05_081512_create_reviews_table', 1),
(9, '2018_06_05_081540_create_replies_table', 1),
(10, '2018_07_01_100000_add_is_banned_to_users', 2),
(11, '2018_07_06_202652_added_img_to_users', 3),
(12, '2018_06_30_105858_create_sessions_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `director_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `poster` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `background` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumb` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trailer_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `released_date` date NOT NULL,
  `status_id` int(11) NOT NULL,
  `rating` double(2,1) NOT NULL DEFAULT '0.0',
  `rating_count` int(11) NOT NULL DEFAULT '0',
  `review_count` int(11) NOT NULL DEFAULT '0',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating_level` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'blah',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `director_name`, `description`, `poster`, `background`, `thumb`, `trailer_id`, `released_date`, `status_id`, `rating`, `rating_count`, `review_count`, `slug`, `rating_level`, `created_at`, `updated_at`) VALUES
(1, 'Solo: A Star Wars Story', 'Ron Howard', 'During an adventure into the criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.', '1efa39bcaec6f3900149160693694536.jpg', 'f5deaeeae1538fb6c45901d524ee2f98.jpg', '84f7e69969dea92a925508f7c1f9579a.jpg', 'jPEYpryMp2s', '2018-05-11', 1, 3.0, 1, 0, 'solo-a-star-wars-story-5b12e0e4e7f07', 'custom-icon flex-row potato', '2018-06-01 22:54:36', '2018-07-08 08:04:22'),
(2, 'Deadpool 2', 'David Leitch', 'Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.', '9908279ebbf1f9b250ba689db6a0222b.jpg', '26dd0dbc6e3f4c8043749885523d6a25.jpg', '069d3bb002acd8d7dd095917f9efe4cb.jpg', '20bpjtCbCz0', '2018-05-18', 1, 4.0, 1, 0, 'deadpool-2-5b12e15162fdf', 'custom-icon flex-row chilis', '2018-06-01 22:56:25', '2018-07-08 08:05:14'),
(3, 'Avengers: Infinity War', 'Anthony Russo, Joe Russo', 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.', 'ba3866600c3540f67c1e9575e213be0a.jpg', 'b6f0479ae87d244975439c6124592772.jpeg', '6faa8040da20ef399b63a72d0e4ab575.jpg', 'QwievZ1Tx-8', '2018-04-27', 1, 3.5, 1, 0, 'avengers-infinity-war-5b12e1beb158b', 'custom-icon flex-row chilis', '2018-06-01 22:58:14', '2018-07-08 08:05:40'),
(4, 'A Quiet Place', 'John Krasinski', 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.', '9f53d83ec0691550f7d2507d57f4f5a2.jpg', '060ad92489947d410d897474079c1477.jpg', 'e44fea3bec53bcea3b7513ccef5857ac.jpg', 'rqEnM25BsNQ', '2018-04-06', 1, 5.0, 1, 0, 'a-quiet-place-5b12e239d93ca', 'custom-icon flex-row chilis', '2018-06-01 23:00:17', '2018-07-08 08:06:02'),
(5, 'Adrift', 'Baltasar Kormákur', 'Based on the true story of survival, a young couple\'s chance encounter leads them first to love, and then on the adventure of a lifetime as they face one of the most catastrophic hurricanes in recorded history.', '24896ee4c6526356cc127852413ea3b4.jpg', '00411460f7c92d2124a67ea0f4cb5f85.jpeg', 'c8fbbc86abe8bd6a5eb6a3b4d0411301.jpg', 'HdMP4sWc71M', '2018-06-01', 1, 2.5, 1, 0, 'adrift-5b12e2a3d51fb', 'custom-icon flex-row potato', '2018-06-01 23:02:03', '2018-07-08 08:06:27'),
(6, 'ဥပါဒါန်', 'ဗန်းကြီး', 'သာသနာကိုမြတ်​နိုးတန်​ဖိုးထား​သောရဟန်​းတစ်​ပါးနှင်​့\r\nသဒ္ဓါလွန်​ကဲကာ ဆုတောင်းမှားခဲ့သော ဒါယိကာမ \r\nတစ်​ယောက်​အ​ကြောင်​း ကို ပုံ​ဖော်​ရိုက်​ကူးထားသည့်ရုပ်​ရှင်​ဇာတ်​ကားကြီး', '45645a27c4f1adc8a7a835976064a86d.jpg', 'f2201f5191c4e92cc5af043eebfd0946.jpg', 'faa9afea49ef2ff029a833cccc778fd0.jpg', 'uw4uV0Ws9N8', '2018-06-01', 1, 3.5, 1, 0, 'padan-5b12e3097752b', 'custom-icon flex-row chilis', '2018-06-01 23:03:45', '2018-07-08 08:07:02'),
(7, 'Ocean\'s 8', 'Gary Ross', 'Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City\'s yearly Met Gala.', '051e4e127b92f5d98d3c79b195f2b291.jpg', '25ddc0f8c9d3e22e03d3076f98d83cb2.jpg', 'efe937780e95574250dabe07151bdc23.jpg', 'n5LoVcVsiSQ', '2018-06-08', 2, 4.5, 1, 0, 'oceans-8-5b13db0bdf407', 'custom-icon flex-row chilis', '2018-06-02 23:11:55', '2018-07-08 08:07:37'),
(8, 'Incredibles 2', 'Brad Bird', 'Bob Parr (Mr. Incredible) is left to care for Jack-Jack while Helen (Elastigirl) is out saving the world.', '303ed4c69846ab36c2904d3ba8573050.jpg', '2b24d495052a8ce66358eb576b8912c8.jpg', '115f89503138416a242f40fb7d7f338e.jpg', 'i5qOzqD9Rms', '2018-06-15', 2, 4.0, 1, 0, 'incredibles-2-5b13dc15d7b94', 'custom-icon flex-row chilis', '2018-06-02 23:16:21', '2018-07-08 08:07:55'),
(9, 'Jurassic World: Fallen Kingdom', 'J.A. Bayona', 'When the island\'s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.', 'ba3866600c3540f67c1e9575e213be0a.jpg', 'c15da1f2b5e5ed6e6837a3802f0d1593.jpg', '0d0871f0806eae32d30983b62252da50.jpg', '1FJD7jZqZEk', '2018-06-22', 2, 3.0, 1, 0, 'jurassic-world-fallen-kingdom-5b13dcb74237d', 'custom-icon flex-row potato', '2018-06-02 23:19:03', '2018-07-08 08:08:09'),
(10, 'Ant-Man and the Wasp', 'Peyton Reed', 'As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.', 'c5ff2543b53f4cc0ad3819a36752467b.jpg', '67f7fb873eaf29526a11a9b7ac33bfac.jpg', '89fcd07f20b6785b92134bd6c1d0fa42.jpg', 'UUkn-enk2RU', '2018-07-06', 2, 3.0, 1, 0, 'ant-man-and-the-wasp-5b13dd61d643b', 'custom-icon flex-row potato', '2018-06-02 23:21:53', '2018-07-08 08:08:45'),
(11, 'Skyscraper', 'Rawson Marshall Thurber', 'FBI Hostage Rescue Team leader and U.S. war veteran Will Sawyer, who now assesses security for skyscrapers. On assignment in Hong Kong he finds the tallest, safest building in the world.', 'e4bb4c5173c2ce17fd8fcd40041c068f.jpg', '7380ad8a673226ae47fce7bff88e9c33.jpg', 'd707329bece455a462b58ce00d1194c9.jpg', '_pIEzZVqwFs', '2018-07-13', 2, 1.0, 1, 0, 'skyscrape-5b13dddabd840', 'custom-icon flex-row ginger', '2018-06-02 23:23:54', '2018-07-08 08:09:21'),
(12, 'Mission: Impossible - Fallout', 'Christopher McQuarrie', 'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.', '704afe073992cbe4813cae2f7715336f.jpg', '7dcd340d84f762eba80aa538b0c527f7.jpg', '7380ad8a673226ae47fce7bff88e9c33.jpg', 'XiHiW4N7-bo', '2018-07-27', 2, 5.0, 1, 0, 'mission-impossible-fallout-5b13dec0bd7e0', 'custom-icon flex-row chilis', '2018-06-02 23:27:44', '2018-07-08 08:09:00');

-- --------------------------------------------------------

--
-- Table structure for table `movie_genres`
--

CREATE TABLE `movie_genres` (
  `movie_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movie_genres`
--

INSERT INTO `movie_genres` (`movie_id`, `genre_id`) VALUES
(5, 6),
(5, 2),
(4, 10),
(4, 9),
(3, 1),
(3, 3),
(3, 15),
(2, 1),
(2, 3),
(2, 15),
(6, 2),
(1, 1),
(1, 3),
(1, 4),
(7, 1),
(7, 7),
(8, 1),
(8, 6),
(8, 16),
(9, 1),
(9, 6),
(9, 4),
(10, 1),
(10, 4),
(10, 15),
(11, 1),
(11, 2),
(12, 1),
(12, 9);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `replies`
--

CREATE TABLE `replies` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `review_id` int(10) UNSIGNED NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `replies`
--

INSERT INTO `replies` (`id`, `user_id`, `review_id`, `body`, `created_at`, `updated_at`) VALUES
(2, 2, 2, 'good ha ha, nice review', '2018-07-01 04:44:40', '2018-07-07 09:50:44'),
(5, 2, 4, 'sdlkfj sdlfjk dsflkj ldsfjl sf', '2018-07-01 06:25:49', '2018-07-01 06:25:49'),
(6, 2, 5, 'hoke loh larr :(', '2018-07-05 11:16:27', '2018-07-05 11:16:27'),
(8, 2, 6, 'lsdfldfj', '2018-07-07 05:25:45', '2018-07-07 05:25:45'),
(9, 2, 6, 'DSFNK', '2018-07-07 05:25:52', '2018-07-07 05:25:52'),
(10, 2, 6, 'SDAFLKDFNLK', '2018-07-07 05:25:56', '2018-07-07 05:25:56'),
(11, 2, 6, 'dsfndfnkd', '2018-07-07 05:26:01', '2018-07-07 05:26:01'),
(12, 1, 6, 'dsd', '2018-07-07 05:46:44', '2018-07-07 05:46:44');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `movie_id` int(10) UNSIGNED NOT NULL,
  `rating` double(2,1) NOT NULL DEFAULT '0.0',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `movie_id`, `rating`, `title`, `body`, `created_at`, `updated_at`) VALUES
(15, 3, 1, 3.0, 'tiitle', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:04:22', '2018-07-08 08:04:22'),
(16, 3, 2, 4.0, 'deadpool', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:05:14', '2018-07-08 08:05:14'),
(17, 3, 3, 3.5, 'infinity good', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:05:40', '2018-07-08 08:05:40'),
(18, 3, 4, 5.0, 'kg par tl', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:06:02', '2018-07-08 08:06:02'),
(19, 3, 5, 2.5, 'Just a normal', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:06:27', '2018-07-08 08:06:27'),
(20, 3, 6, 3.5, 'ma soe par voo', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:07:02', '2018-07-08 08:07:02'),
(21, 3, 7, 4.5, 'hoke b', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:07:37', '2018-07-08 08:07:37'),
(22, 3, 8, 4.0, 'kg par tl', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:07:55', '2018-07-08 08:07:55'),
(23, 3, 9, 3.0, 'Just a normal', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:08:09', '2018-07-08 08:08:09'),
(24, 3, 10, 3.0, 'title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:08:45', '2018-07-08 08:08:45'),
(25, 3, 12, 5.0, 'kg par tl', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:09:00', '2018-07-08 08:09:00'),
(26, 3, 11, 1.0, 'paw karr', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-07-08 08:09:21', '2018-07-08 08:09:21');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('IGK5ugPe34WrRKGBGptqevPH94bjUm4xJ4e8yp1S', 3, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', 'YTo0OntzOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjY6Il90b2tlbiI7czo0MDoiRjMwTVBWemVGeHVpMWlTYWRIUWlUYmdqNVdHN2FFRnlYeHVaYjNURSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjM7fQ==', 1531061358);

-- --------------------------------------------------------

--
-- Table structure for table `statuses`
--

CREATE TABLE `statuses` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `statuses`
--

INSERT INTO `statuses` (`id`, `name`) VALUES
(1, 'now showing'),
(2, 'coming soon'),
(3, 'showed');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` tinyint(4) NOT NULL DEFAULT '2',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_banned` tinyint(1) NOT NULL DEFAULT '0',
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `slug`, `password`, `role_id`, `remember_token`, `created_at`, `updated_at`, `is_banned`, `img`, `bio`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin-76767', '$2y$10$NFsZqbI4nZ2JDCyheuKwp.mY4fuQGX4QsBi7zU2sMaLP1OmRSYoZO', 1, 'guJvWBvjXGJhCDU0dzF5Vu6nFEJxrGJcANn1vh3tvQaMqHFDhZuBS8yekCVy', '2018-06-02 21:50:30', '2018-07-08 06:49:06', 0, 'eefc9e10ebdc4a2333b42b2dbb8f27b6.jpg', 'ha ha ha ha ha'),
(2, 'Aung Ko Ko', 'aungkoko174@gmail.com', 'aung-ko-7676', '$2y$10$Lg36gPJ3HCyGzRLHY/v9Ku9pFqmjWA5ZoS7fwWIGlvu2kA00oG5A.', 2, '84Pzi62THrGKXC4BkzDCseB6gQm9yv48HA7wZnCU5pFALXA5VMInOccbbtXX', '2018-06-16 05:39:30', '2018-07-08 07:02:37', 0, 'f770b62bc8f42a0b66751fe636fc6eb0.png', NULL),
(3, 'David', 'david@yahoo.com', 'david-5b40b4d1bdf45', '$2y$10$EVsaOsV8kxCsKk/TNqMkwus4CfaPTVu4vRFyXyyN7HoN6EbUJZDnO', 2, 'YqRZDez4S9z9P7HEvc4nbfImPNcwEa5s13Ndv8pkexaDCZLX5l6IcTa976kB', '2018-07-07 06:10:49', '2018-07-07 06:10:49', 0, 'default-user.png', NULL),
(4, 'Prof. Lukas Kerluke', 'eliseo.bartell@gmail.com', 'Prof. Lukas Kerluke-5b421f9472a9f', '$2y$10$WXgeQjswInu4OeaaPurNyO9i669XKkPTE/Mr.rxhDcvMUZBYWH/lW', 2, NULL, '2018-07-08 07:58:36', '2018-07-08 07:58:36', 0, 'default-user.png', 'Est quo ut sed nulla. Rerum quia dolore dolorem ea beatae laborum ratione ab. Qui nam maiores nostrum assumenda vel voluptatem fugiat. Consequatur et repellat est voluptatem.'),
(5, 'Dr. Helena Pfeffer', 'nmayer@gorczany.com', 'Dr. Helena Pfeffer-5b421f948f82a', '$2y$10$Dz3ofdpHdeA6SPBkkB23g.Xtx3.ptGawEHZpN.p2pNFXsUvg/5vFm', 2, NULL, '2018-07-08 07:58:36', '2018-07-08 07:58:36', 0, 'default-user.png', 'Laboriosam enim officiis mollitia est. Libero qui voluptates libero itaque facilis. Consectetur omnis odit et incidunt error reiciendis quos. Tempore suscipit ut eius labore consequatur dolorum quia.'),
(6, 'Johnnie Hilpert', 'jesse58@yahoo.com', 'Johnnie Hilpert-5b421f94ac9e0', '$2y$10$fo5RuhRkbyitI4Ejr5ZIX.PBwjqLWvPYo1rYQdQPgUWsJvf0oG/mK', 2, NULL, '2018-07-08 07:58:36', '2018-07-08 07:58:36', 0, 'default-user.png', 'Ut tempora cum sit reprehenderit. Et et est rerum et et qui. Accusamus laboriosam at esse est.'),
(7, 'Americo Ryan DVM', 'arlo.zieme@kozey.com', 'Americo Ryan DVM-5b421f94c51d2', '$2y$10$XbkMqAstQMpmxqFkfOLEzOmmC52yk4McL8ZcbA75qTfaH1Nhhi7H2', 2, NULL, '2018-07-08 07:58:36', '2018-07-08 07:58:36', 0, 'default-user.png', 'Recusandae voluptas vero recusandae. Enim ut sit modi neque nemo iure nesciunt sunt. Fuga ab expedita impedit facere alias dolorum saepe. Voluptatem ut rerum aliquid sunt placeat maiores et odio.'),
(8, 'Leonora Hilpert', 'andreanne.ward@gmail.com', 'Leonora Hilpert-5b421f94e2dd3', '$2y$10$QFbt8QjaBaSZhNlAgnpQkO6GR6jdVvE9rxx4aM8VDhX6JSQDgZyA2', 2, NULL, '2018-07-08 07:58:36', '2018-07-08 07:58:36', 0, 'default-user.png', 'Qui velit iure accusantium quae consequuntur. Laboriosam dolor tempore et earum. Voluptas possimus recusandae numquam et assumenda impedit sequi. Expedita dolores exercitationem et quo.'),
(9, 'Anissa Bernhard', 'bernier.jaycee@hotmail.com', 'Anissa Bernhard-5b421f950721a', '$2y$10$1Pc6ksMW.nGZ0sKr66dnguyejbwq3imGTiL6/vdpN15Xtq61S.MHq', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'Dolorem quod quae optio. Neque nisi autem odio mollitia dicta eaque. Qui quo hic voluptatum et enim autem. Quo deserunt labore aliquam occaecati.'),
(10, 'Christ Leannon', 'winona19@ankunding.com', 'Christ Leannon-5b421f9524ddc', '$2y$10$cagBWlYN/7flW9t5g3TVcOIH0gDRceuGDPNwP0cv2xzalGYmKy.4O', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'Rerum perspiciatis nam ad adipisci. Voluptas amet dolorem aut. Libero perspiciatis facilis qui sint neque.'),
(11, 'Jewel Bradtke', 'msimonis@gmail.com', 'Jewel Bradtke-5b421f953d392', '$2y$10$qi5eNitAPileODjhdVR.r.UvAn9V1Xri/3qbmq4CmetDmHhz0gW7O', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'A sequi necessitatibus corrupti voluptate quas et voluptates eligendi. Porro reprehenderit et ut. Nesciunt iusto et quis eos consequatur et maxime. Aliquid aperiam sed quae alias esse.'),
(12, 'Joel Reynolds', 'monserrate.jacobson@yahoo.com', 'Joel Reynolds-5b421f9555979', '$2y$10$NEA67p2YeUSi/uYeIHlHeOy7mBHjxvHIOTTw/rOYsdSc7X5mHxNN.', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'Eos fugiat rem non nihil. Quos omnis non necessitatibus nemo aut maiores.'),
(13, 'Jules Hills MD', 'vergie.beer@gmail.com', 'Jules Hills MD-5b421f956df3f', '$2y$10$eqLOcBHXnAjHx8Y0U2Snvepg6B1H/5eQeCWQ13OdiG92lZc44Zapm', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'Magnam cumque aut distinctio placeat necessitatibus ut quo. Error vero quis quidem sunt et aut. Nobis alias voluptas sit mollitia architecto placeat.'),
(14, 'Guido Fay II', 'devante62@johnson.com', 'Guido Fay II-5b421f95864d6', '$2y$10$dzKnxVB3JPgvx9QWJpk0bOJL9ZKfsle.0ctB7zTER/jlGXKrjEwlK', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'Cumque aliquam ea eaque ipsam maiores tenetur. Quasi libero omnis harum et sit. Aut molestiae id et repellendus.'),
(15, 'Miss Freeda Wilkinson DVM', 'gwilderman@gmail.com', 'Miss Freeda Wilkinson DVM-5b421f959ec69', '$2y$10$m6HjfcDLGW0o1oYE10jBPuoyE/LZxJAeeo25KLyR.e5Av4fd.GXa2', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'Beatae ut eveniet repellat voluptatibus laborum. Nam odio tenetur et aliquid voluptatem. Et consequatur et laudantium rerum.'),
(16, 'Rashawn Rohan', 'tia81@hotmail.com', 'Rashawn Rohan-5b421f95b722a', '$2y$10$EXA72s6Wn58OeJnKZ7C2V.6TW/z0CWZKBSaiH5YOiy8IbSQVTjKZK', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'Doloremque ad atque rerum et. Blanditiis aut facere eos. Quia sed rem eum accusamus. Veniam dolorum maxime quidem et nostrum quam minima.'),
(17, 'Dr. Savion Champlin II', 'cjenkins@sporer.net', 'Dr. Savion Champlin II-5b421f95cf810', '$2y$10$Gq9uePR7PUFE1IT.4F5Q7.9zmBjAawsTZUQgt4JSbKBAP2LTHhbty', 2, NULL, '2018-07-08 07:58:37', '2018-07-08 07:58:37', 0, 'default-user.png', 'Amet nihil eveniet dolorem et reprehenderit voluptate. Ut delectus sit totam iste dolore. Iusto pariatur rerum sapiente perferendis.'),
(18, 'Ethel O\'Conner', 'sroberts@hotmail.com', 'Ethel O\'Conner-5b421f95e7dee', '$2y$10$f/.fOVlxCpts144jsh3.Q.5roAvOSa.X/0I/vzlzQWCVrhn8UAOnW', 2, NULL, '2018-07-08 07:58:38', '2018-07-08 07:58:38', 0, 'default-user.png', 'Consectetur saepe voluptatem eos vel quo et eligendi velit. Unde dicta sunt eum molestiae modi delectus quisquam. Recusandae ut aut ut aliquid autem culpa autem.'),
(19, 'Dr. Geovanni Dickens MD', 'buckridge.emmett@yahoo.com', 'Dr. Geovanni Dickens MD-5b421f960c160', '$2y$10$La4NZTlygOn1RM.jdThuQOnJKyg2KEsBjeSXq/He/W4m/6b2MZ5Fe', 2, NULL, '2018-07-08 07:58:38', '2018-07-08 07:58:38', 0, 'default-user.png', 'Voluptate iusto nostrum dolorem. Assumenda suscipit quis voluptatibus. Natus totam expedita aspernatur totam qui reprehenderit.'),
(20, 'Domenic Daniel', 'dorris35@gmail.com', 'Domenic Daniel-5b421f962476f', '$2y$10$9O6ootocV0KXpNYk3OaX1.Py8Qf4O2qJdDRoW1hIzHX3bwZ4SJ.s6', 2, NULL, '2018-07-08 07:58:38', '2018-07-08 07:58:38', 0, 'default-user.png', 'Labore occaecati atque facere. Dignissimos autem non quae doloremque. Et dicta distinctio in et doloremque sit.'),
(21, 'Chelsey Hayes', 'ruben09@jerde.com', 'Chelsey Hayes-5b421f963f89a', '$2y$10$Ijl76Qrfcjz4G24dLsLcPOPqwzVbCLLYtAj4TxH6FREIx7UK8JEc2', 2, NULL, '2018-07-08 07:58:38', '2018-07-08 07:58:38', 0, 'default-user.png', 'Provident dolores enim reprehenderit perferendis suscipit nesciunt. Animi ut velit ea quia perferendis tempore quam molestiae. Praesentium dolor rerum aut unde amet voluptates neque.'),
(22, 'Prof. Mazie Emard', 'meda.gerlach@boyle.com', 'Prof. Mazie Emard-5b421f9657e21', '$2y$10$eR0hvl24UOwDQb44wMqrfOuP2xOJAAPs2Bfh3GOnNp26Y4wf9MQYq', 2, NULL, '2018-07-08 07:58:38', '2018-07-08 07:58:38', 0, 'default-user.png', 'Culpa veritatis delectus in porro vel aliquid. Voluptatem impedit voluptates dolores dolorem neque possimus consectetur. Sed quas vitae voluptatem et et culpa.'),
(23, 'Joaquin Bins PhD', 'schmeler.sonia@hotmail.com', 'Joaquin Bins PhD-5b421f9679390', '$2y$10$8tUdZGoY7XQJu9Xex5OY4eNOdVM.Ozoeqa37pJg.lb8fpLUq.f9XW', 2, NULL, '2018-07-08 07:58:38', '2018-07-08 07:58:38', 0, 'default-user.png', 'Deleniti distinctio delectus et soluta. Sint labore et enim suscipit eos. Eius ut doloremque quo error. Sunt quos soluta iusto ex. Aspernatur alias ipsum qui qui quam.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `genres_name_unique` (`name`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `movies_slug_unique` (`slug`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `replies`
--
ALTER TABLE `replies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`),
  ADD KEY `reviews_movie_id_foreign` (`movie_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD UNIQUE KEY `sessions_id_unique` (`id`);

--
-- Indexes for table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `replies`
--
ALTER TABLE `replies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
