---
bg: ""
crawlertitle: "카카오_코드페스티벌_B"
summary: "카카오_코드페스티벌_B"
layout: post
title: "보행자 천국"
date: "2017-09-13 18:44"
categories: posts
tags: ['카카오_코드페스티벌']
author: jgb
---
보행자 천국

```c++
#include <vector>

using namespace std;

int MOD = 20170805;

// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
int solution(int m, int n, vector<vector<int>> city_map) {
	int answer = 0;

	vector<int> value(n, 0);
	vector<int> down(n, 0);
	vector<int> right(n, 0);

	value[0] = 1;
	for (int i = 0; i<m; i++) {
		if (city_map[i][0] == 0) {
			value[0] = (value[0] + down[0]) % MOD;
			down[0] = 0;
			right[0] = 0;
		}
		else if (city_map[i][0] == 1) {
			down[0] = 0;
			right[0] = 0;
			value[0] = 0;
		}
		else if (city_map[i][0] == 2) {
			down[0] = (value[0] + down[0]) % MOD;
			right[0] = 0;
			value[0] = 0;
		}
		for (int j = 1; j<n; j++) {
			if (city_map[i][j] == 0) {
				value[j] = (value[j] + value[j - 1] + right[j - 1] + down[j]) % MOD;
				down[j] = 0;
				right[j] = 0;
			}
			else if (city_map[i][j] == 1) {
				down[j] = 0;
				right[j] = 0;
				value[j] = 0;
			}
			else if (city_map[i][j] == 2) {
				down[j] = (value[j] + down[j]) % MOD;
				right[j] = (value[j - 1] + right[j - 1]) % MOD;
				value[j] = 0;
			}

		}
	}

	answer = value[n - 1] % MOD;


	return answer;
}
```
