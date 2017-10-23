---
bg: ""
crawlertitle: "카카오_코드페스티벌_A"
summary: "카카오_코드페스티벌_A"
layout: post
title: "컬러링북"
date: "2017-09-13 18:41"
categories: posts
tags: ['카카오_코드페스티벌']
author: jgb
---
컬러링북

```c++
#include <vector>
#include <cstring>

using namespace std;

bool dp[105][105];

int check(int m, int n, vector<vector<int>> &picture, int x, int y) {
	int size = 1;
	dp[x][y] = true;

	if (y + 1 < n && !dp[x][y + 1] && picture[x][y] == picture[x][y + 1]) {
		size += check(m, n, picture, x, y + 1);
	}

	if (x + 1 < m && !dp[x + 1][y] && picture[x][y] == picture[x + 1][y]) {
		size += check(m, n, picture, x + 1, y);
	}

	if (y > 0 && !dp[x][y - 1] && picture[x][y] == picture[x][y - 1]) {
		size += check(m, n, picture, x, y - 1);
	}

	if (x > 0 && !dp[x - 1][y] && picture[x][y] == picture[x - 1][y]) {
		size += check(m, n, picture, x - 1, y);
	}

	return size;
}


// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
vector<int> solution(int m, int n, vector<vector<int>> picture) {
	int number_of_area = 0;
	int max_size_of_one_area = 0;
	int size;

	memset(dp, 0, sizeof(dp));

	for (int i = 0; i<m; i++) {
		for (int j = 0; j<n; j++) {
			if (dp[i][j] || picture[i][j] == 0) {
				continue;
			}
			number_of_area++;
			size = check(m, n, picture, i, j);
			if (size > max_size_of_one_area) {
				max_size_of_one_area = size;
			}
		}
	}

	vector<int> answer(2);
	answer[0] = number_of_area;
	answer[1] = max_size_of_one_area;
	return answer;
}
```
