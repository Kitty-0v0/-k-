// ▼▼▼ 用这块新代码替换旧的 ACCOUNT_STRUCTURE ▼▼▼
const ACCOUNT_STRUCTURE = {
  普通账户: {
    isAsset: true,
    types: [
      { name: '现金', iconUrl: 'https://cdn.jsdelivr.net.cn/gh/xxloli/tc/7jfvqjdpga.png' },
      { name: '储蓄卡', iconUrl: 'https://file.zhuyitai.com/feedback/202511/24/b27789a22d666257026ac97252ef6e91.png' },
      {
        name: '微信钱包',
        iconUrl:
          'https://chatbotcos.weixin.qq.com/chatbot/30-openaiassets_b29346f574b2c4eed35f1ec775048f54_469401763966119278.png',
      },
      {
        name: '支付宝',
        iconUrl:
          'https://intellcs.sinosafe.com.cn/immessage/api/v1/message/attachment/download?groupName=group1&authorization=EnAfMjUzaQVz&fileName=M00/00/A8/CgNDimkj_NqACA9jAAAGNJQMcNM569.png',
      },
      { name: '其他', iconUrl: 'https://yfupload.hebccw.cn/images/08zygs/wqbs/2025/11/24/1763966218_wqbs.png' },
    ],
  },
  信用账户: {
    isAsset: false,
    types: [
      {
        name: '信用卡',
        iconUrl: 'https://e3f49eaa46b57.cdn.sohucs.com/2025/11/24/14/37/MTAwMTE0XzE3NjM5NjYyNDgwNDM=.png',
      },
      {
        name: '花呗',
        iconUrl:
          'https://xiaoiwg.dongfeng-nissan.com.cn/aicc-workbench/res/download/default/temp/images/20251124/541e0ffb8af4b7e545ffaebf48914cc00d844cb9.png',
      },
      {
        name: '白条',
        iconUrl: 'https://saas.chatbot.cn/download/minio/standard/2025-11-24/f3a4eb4c923b4c6498e874ac96b4c6be.png',
      },
      {
        name: '其他',
        iconUrl:
          'https://xiaoiwg.dongfeng-nissan.com.cn/aicc-workbench/res/download/default/temp/images/20251124/7b355b0d38dba219988f0104bf23ee1eddc77ae8.png',
      },
    ],
  },
  投资理财: {
    isAsset: true,
    types: [
      {
        name: '股票',
        iconUrl: 'https://help.hemorn.com/static/upload/2025November/03ceb40e0dbb5f332275902db8b24531.png',
      },
      {
        name: '基金',
        iconUrl:
          'https://chatbotcos.weixin.qq.com/chatbot/30-openaiassets_7d94d5850ac517ce891233087a487f9e_469401763966440014.png',
      },
      { name: '其他', iconUrl: 'https://static.eeo.cn/upload/file/20251124/1763966464300399.png' },
    ],
  },
  充值账户: {
    isAsset: true,
    types: [
      {
        name: '饭卡',
        iconUrl: 'https://www.yn12377.cn/jubao/upload/smjb/2025/11/24/abb88f9026d64ed1a630b57e9cf6fe48.png',
      },
      {
        name: '公交卡',
        iconUrl: 'https://cdncs.ykt.cbern.com.cn/v0.1/download?path=/zxx_feedback/qdqqd/1763966520949.png',
      },
      {
        name: '其他',
        iconUrl: 'https://saas.chatbot.cn/download/minio/standard/2025-11-24/65d27b9d514e4b428b8fcc5c6e1363f2.png',
      },
    ],
  },
  其他账户: {
    isAsset: null,
    types: [
      {
        name: '借入',
        iconUrl: 'https://www.yn12377.cn/jubao/upload/smjb/2025/11/24/591537de446a43e2af6238d8f1600bca.png',
      },
      {
        name: '借出',
        iconUrl:
          'https://xiaoiwg.dongfeng-nissan.com.cn/aicc-workbench/res/download/default/temp/images/20251124/999f3779341fd444090915ef98a6f6e46ad607a8.png',
      },
    ],
  },
};
// ▲▲▲ 替换结束 ▲▲▲
// ▼▼▼ 【兔k记账】在JS文件顶部，变量定义区添加 ▼▼▼
const ACCOUNTING_CATEGORIES = {
  expense: [
    { name: '餐饮', icon: 'https://s3plus.meituan.net/opapisdk/op_ticket_1_5673241091_1763966898357_qdqqd_q6gypk.png' },
    { name: '购物', icon: 'https://static.eeo.cn/upload/images/20251124/286655c4437163e96279.png' },
    { name: '交通', icon: 'https://static.eeo.cn/upload/images/20251124/83e440191818e2208623.png' },
    {
      name: '娱乐',
      icon: 'https://zkaicc.huilan.com/aicc/api/aicc-file/miniofile/preViewPicture/aicc/qdqqd_1763967070965.png',
    },
    { name: '住房', icon: 'https://yfupload.hebccw.cn/images/08zygs/wqbs/2025/11/24/1763967177_wqbs.png' },
    {
      name: '医疗',
      icon: 'https://xiaoiwg.dongfeng-nissan.com.cn/aicc-workbench/res/download/default/temp/images/20251124/21f586446548ec0b99bdd1e7c08adec359069046.png',
    },
    { name: '其他', icon: 'https://image.uglycat.cc/yfneo8.png' },
  ],
  income: [
    { name: '工资', icon: 'https://image.uglycat.cc/abn2a9.png' },
    { name: '红包', icon: 'https://image.uglycat.cc/k4zlkz.png' },
    {
      name: '理财',
      icon: 'https://xiaoiwg.dongfeng-nissan.com.cn/aicc-workbench/res/download/default/temp/images/20251124/bb17bb33337885d0a579889b1cb8499d37a15de9.png',
    },
    { name: '其他', icon: 'https://image.uglycat.cc/3la2dz.png' },
  ],
};
// ▲▲▲ 添加结束 ▲▲▲
/**
 * 【全新】切换“兔k记账”App内部的页面视图
 * @param {string} viewId - 要显示的目标视图的ID
 */
function switchTukeyView(viewId) {
  // 隐藏所有视图
  document.querySelectorAll('.tukey-view').forEach(view => {
    view.style.display = 'none';
  });

  // 显示目标视图
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.style.display = 'block';
  }

  // 更新底部导航栏高亮状态
  document.querySelectorAll('#tukey-bottom-nav .tukey-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewId);
  });

  // 根据视图ID更新头部标题
  const headerTitle = document.getElementById('tukey-header-title');
  const navItem = document.querySelector(`.tukey-nav-item[data-view="${viewId}"]`);
  if (headerTitle && navItem) {
    headerTitle.textContent = navItem.querySelector('span').textContent;
  }
  // ▼▼▼ 在这里添加一个 case ▼▼▼
  if (viewId === 'tukey-reports-view') {
    renderTukeyReportsView(); // 调用我们即将创建的主渲染函数
  }
  // ▲▲▲ 添加结束 ▲▲▲
}
/* --- 【全新】兔k记账-用户设置功能核心函数 --- */
let tukeyUserSettings = {
  // 全局变量，用于缓存用户设置
  id: 'main_user',
  avatar: 'https://i.postimg.cc/PxZrFFFL/o-o-1.jpg',
  username: '我',
  profession: '',
  syncWithTaobao: false,
};

/**
 * 加载兔k记账的用户设置并渲染到设置页面
 */
async function loadAndRenderTukeyUserSettings() {
  const settings = await db.tukeyUserSettings.get('main_user');
  if (settings) {
    tukeyUserSettings = settings;
  }

  // 填充UI
  document.getElementById('tukey-user-avatar-preview').src = tukeyUserSettings.avatar;
  document.getElementById('tukey-user-name-input').value = tukeyUserSettings.username;
  document.getElementById('tukey-user-profession-input').value = tukeyUserSettings.profession || '';
  document.getElementById('sync-to-taobao-toggle').checked = tukeyUserSettings.syncWithTaobao || false;
}

/**
 * 保存兔k记账的用户设置
 */
async function saveTukeyUserSettings() {
  tukeyUserSettings.avatar = document.getElementById('tukey-user-avatar-preview').src;
  tukeyUserSettings.username = document.getElementById('tukey-user-name-input').value.trim() || '我';
  tukeyUserSettings.profession = document.getElementById('tukey-user-profession-input').value.trim();
  tukeyUserSettings.syncWithTaobao = document.getElementById('sync-to-taobao-toggle').checked;

  await db.tukeyUserSettings.put(tukeyUserSettings);
  alert('记账设置已保存！');
}
/* --- 用户设置功能函数结束 --- */

/* --- 【全新】兔k记账-钱包功能核心函数 --- */

let editingAccountId = null; // 用于追踪正在编辑的账户ID

// ▼▼▼ 【兔k记账】用这整块【V2 - 图标修复版】的代码，替换旧的 renderTukeyWalletView 函数 ▼▼▼
async function renderTukeyWalletView() {
  const listEl = document.getElementById('wallet-accounts-list');
  listEl.innerHTML = '';

  const allAccounts = await db.tukeyAccounts.toArray();

  // --- 1. 计算并显示资产总览 (这部分逻辑不变) ---
  let totalAssets = 0;
  let totalLiabilities = 0;
  allAccounts.forEach(acc => {
    const balance = parseFloat(acc.balance) || 0;
    const categoryInfo = ACCOUNT_STRUCTURE[acc.category];
    if (!categoryInfo) return;

    if (categoryInfo.isAsset === true) {
      totalAssets += balance;
    } else if (categoryInfo.isAsset === false) {
      totalLiabilities += balance;
    } else {
      if (acc.type === '借出') totalAssets += balance;
      if (acc.type === '借入') totalLiabilities += balance;
    }
  });

  const netAssets = totalAssets - totalLiabilities;
  document.getElementById('net-assets-value').textContent = `¥ ${netAssets.toFixed(2)}`;
  document.getElementById('total-assets-value').textContent = `¥ ${totalAssets.toFixed(2)}`;
  document.getElementById('total-liabilities-value').textContent = `¥ ${totalLiabilities.toFixed(2)}`;

  // --- 2. 按分类渲染账户列表 ---
  for (const categoryName in ACCOUNT_STRUCTURE) {
    const accountsInCategory = allAccounts.filter(acc => acc.category === categoryName);
    if (accountsInCategory.length === 0) continue;

    const categoryCard = document.createElement('div');
    categoryCard.className = 'tukey-account-category-card';

    let categoryTotal = 0;
    accountsInCategory.forEach(acc => (categoryTotal += parseFloat(acc.balance) || 0));

    // ▼▼▼ ★★★★★ 核心修改在这里 ★★★★★ ▼▼▼
    let accountsHtml = '';
    accountsInCategory.forEach(acc => {
      // 1. 根据账户的分类和类型，找到对应的图标URL
      const categoryInfo = ACCOUNT_STRUCTURE[acc.category];
      const typeInfo = categoryInfo?.types.find(t => t.name === acc.type);
      // 2. 如果找到了就用它的图标，找不到就用一个备用图标或空字符串
      const iconUrl = typeInfo ? typeInfo.iconUrl : 'https://i.postimg.cc/y88P16yW/default-icon.png';

      // 3. 在HTML结构中，添加 <img> 标签来显示图标
      accountsHtml += `
                <div class="tukey-account-item" data-account-id="${acc.id}">
                    <div class="account-info">
                        <img src="${iconUrl}" class="account-icon" alt="${acc.type}">
                        <span class="account-name">${acc.name}</span>
                    </div>
                    <div class="account-balance-and-type">
                        <span class="account-balance">¥ ${parseFloat(acc.balance).toFixed(2)}</span>
                        <span class="account-type-name">${acc.type}</span>
                    </div>
                </div>
            `;
    });
    // ▲▲▲ ★★★★★ 核心修改结束 ★★★★★ ▲▲▲

    // 渲染大类标题和总额
    categoryCard.innerHTML = `
            <div class="category-header">
                <div class="category-title">
                    <span class="name">${categoryName}</span>
                    <span class="total">¥ ${categoryTotal.toFixed(2)}</span>
                </div>
            </div>
            <div class="category-accounts-list">
                ${accountsHtml}
            </div>
        `;
    listEl.appendChild(categoryCard);
  }
}
// ▲▲▲ 替换结束 ▲▲▲
// ▼▼▼ 粘贴下面这【三个】全新的函数，来替换旧的 openAccountEditor 和 saveTukeyAccount ▼▼▼

/**
 * 【全新】第一步：打开账户类型选择界面
 */
function openAccountTypeSelector() {
  editingAccountId = null; // 确保是添加模式
  const modal = document.getElementById('account-editor-modal');
  const titleEl = document.getElementById('account-editor-title');
  const selectionView = document.getElementById('account-type-selection-view');
  const formView = document.getElementById('account-editor-form');
  const saveBtn = document.getElementById('save-account-btn');

  titleEl.textContent = '选择账户类型';
  formView.style.display = 'none';
  selectionView.style.display = 'block';
  saveBtn.style.display = 'none'; // 在选择阶段隐藏保存按钮
  selectionView.innerHTML = ''; // 清空旧内容，准备重新渲染

  // 动态生成所有可选的账户类型
  for (const categoryName in ACCOUNT_STRUCTURE) {
    const categoryInfo = ACCOUNT_STRUCTURE[categoryName];
    const groupEl = document.createElement('div');
    groupEl.className = 'category-group';

    let typesHtml = '';
    categoryInfo.types.forEach(type => {
      typesHtml += `
                <div class="type-item" data-category="${categoryName}" data-type="${type.name}">
                    <img src="${type.iconUrl}" class="type-icon">
                    <span class="type-name">${type.name}</span>
                </div>
            `;
    });

    groupEl.innerHTML = `
            <div class="category-group-title">${categoryName}</div>
            <div class="type-grid">${typesHtml}</div>
        `;
    selectionView.appendChild(groupEl);
  }
  modal.classList.add('visible');
}

/**
 * 【重构】第二步：打开账户编辑器表单（用于添加或编辑）
 */
async function openAccountEditor(accountId = null, preselectedCategory = null, preselectedType = null) {
  editingAccountId = accountId;
  const modal = document.getElementById('account-editor-modal');
  const titleEl = document.getElementById('account-editor-title');
  const selectionView = document.getElementById('account-type-selection-view');
  const formView = document.getElementById('account-editor-form');
  const saveBtn = document.getElementById('save-account-btn');

  // 获取表单元素
  const categorySelect = document.getElementById('account-category-select');
  const typeSelect = document.getElementById('account-type-select');
  const nameInput = document.getElementById('account-name-input');
  const balanceInput = document.getElementById('account-balance-input');
  const remarksInput = document.getElementById('account-remarks-input');

  // 切换视图
  selectionView.style.display = 'none';
  formView.style.display = 'block';
  saveBtn.style.display = 'inline-block';

  if (accountId) {
    // --- 编辑模式 ---
    titleEl.textContent = '编辑账户';
    const account = await db.tukeyAccounts.get(accountId);
    if (account) {
      // 填充并选中已保存的数据
      categorySelect.innerHTML = `<option value="${account.category}">${account.category}</option>`;
      typeSelect.innerHTML = `<option value="${account.type}">${account.type}</option>`;
      categorySelect.value = account.category;
      typeSelect.value = account.type;
      nameInput.value = account.name;
      balanceInput.value = account.balance;
      remarksInput.value = account.remarks || '';
      // 编辑时不允许修改分类和类型
      categorySelect.disabled = true;
      typeSelect.disabled = true;
    }
  } else {
    // --- 添加模式 (已选定类型) ---
    titleEl.textContent = '添加新账户';
    // 填充并锁定预选的分类和类型
    categorySelect.innerHTML = `<option value="${preselectedCategory}">${preselectedCategory}</option>`;
    typeSelect.innerHTML = `<option value="${preselectedType}">${preselectedType}</option>`;
    categorySelect.value = preselectedCategory;
    typeSelect.value = preselectedType;
    categorySelect.disabled = true;
    typeSelect.disabled = true;

    // 清空其他输入框
    nameInput.value = '';
    balanceInput.value = '';
    remarksInput.value = '';

    // 自动聚焦到账户名称输入框
    nameInput.focus();
  }
  modal.classList.add('visible');
}

/**
 * 【重构】保存账户信息的核心函数
 */
async function saveTukeyAccount() {
  const category = document.getElementById('account-category-select').value;
  const typeName = document.getElementById('account-type-select').value;
  const name = document.getElementById('account-name-input').value.trim();
  const balance = document.getElementById('account-balance-input').value;
  const remarks = document.getElementById('account-remarks-input').value.trim();

  if (!name) {
    alert('账户名称不能为空！');
    return;
  }
  if (balance === '' || isNaN(parseFloat(balance))) {
    alert('请输入有效的账户余额！');
    return;
  }

  const selectedType = ACCOUNT_STRUCTURE[category]?.types.find(t => t.name === typeName);
  const iconUrl = selectedType ? selectedType.iconUrl : '';

  const accountData = { category, type: typeName, name, balance: parseFloat(balance), remarks, iconUrl };

  try {
    if (editingAccountId) {
      await db.tukeyAccounts.update(editingAccountId, accountData);
      alert('账户已更新！');
    } else {
      await db.tukeyAccounts.add(accountData);
      alert('新账户已添加！');
    }
    document.getElementById('account-editor-modal').classList.remove('visible');
    await renderTukeyWalletView(); // ★★★ 这就是解决“不加入列表”问题的关键！
  } catch (error) {
    console.error('保存账户失败:', error);
    alert(`保存失败: ${error.message}`);
  }
}
// ▲▲▲ 函数替换结束 ▲▲▲

/**
 * 删除一个账户
 * @param {number} accountId - 要删除的账户ID
 */
async function deleteTukeyAccount(accountId) {
  const confirmed = await showCustomConfirm('删除账户', '确定要删除这个账户吗？此操作不可恢复。', {
    confirmButtonClass: 'btn-danger',
  });
  if (confirmed) {
    await db.tukeyAccounts.delete(accountId);
    await renderTukeyWalletView(); // 刷新钱包界面
    alert('账户已删除。');
  }
}

/* --- 【全新】兔k记账-Excel导出功能 --- */

/**
 * 打开导出选项模态框
 */
async function openTukeyExportModal() {
  const modal = document.getElementById('tukey-export-modal');
  const listEl = document.getElementById('tukey-export-account-list');
  listEl.innerHTML = '';

  const accounts = await db.tukeyAccounts.toArray();

  // 添加“所有账户”选项
  listEl.innerHTML += `<label><input type="checkbox" value="all" id="tukey-export-select-all"> <strong>所有账户</strong></label>`;

  // 添加各个单独账户的选项
  accounts.forEach(acc => {
    listEl.innerHTML += `<label><input type="checkbox" class="tukey-export-account-cb" value="${acc.id}"> ${acc.name} (${acc.type})</label>`;
  });

  // 为“所有账户”复选框添加联动逻辑
  document.getElementById('tukey-export-select-all').addEventListener('change', e => {
    document.querySelectorAll('.tukey-export-account-cb').forEach(cb => {
      cb.checked = e.target.checked;
    });
  });

  modal.classList.add('visible');
}

/**
 * 执行导出为Excel的核心函数
 */
async function exportTukeyReportToExcel() {
  const selectedAccountIds = Array.from(document.querySelectorAll('.tukey-export-account-cb:checked')).map(cb =>
    parseInt(cb.value),
  );

  if (selectedAccountIds.length === 0) {
    alert('请至少选择一个要导出的账户！');
    return;
  }

  document.getElementById('tukey-export-modal').classList.remove('visible');
  await showCustomAlert('请稍候...', '正在生成Excel文件...');

  try {
    // 1. 根据选择的账户ID从数据库获取记录
    const records = await db.tukeyAccountingRecords.where('accountId').anyOf(selectedAccountIds).sortBy('timestamp');

    if (records.length === 0) {
      await showCustomAlert('无数据', '选中的账户没有任何记账记录可供导出。');
      return;
    }

    // 2. 将数据格式化为适合Excel的数组
    const dataForSheet = records.map(rec => ({
      日期: new Date(rec.timestamp).toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      类型: rec.type === 'expense' ? '支出' : '收入',
      分类: rec.category,
      金额: rec.type === 'expense' ? -rec.amount : rec.amount,
      账户: rec.accountName,
      备注: rec.remarks || '',
    }));

    // 3. 使用SheetJS创建工作簿和工作表
    const worksheet = XLSX.utils.json_to_sheet(dataForSheet);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '账单明细');

    // (可选) 调整列宽
    worksheet['!cols'] = [
      { wch: 20 }, // 日期
      { wch: 8 }, // 类型
      { wch: 15 }, // 分类
      { wch: 12 }, // 金额
      { wch: 20 }, // 账户
      { wch: 30 }, // 备注
    ];

    // 4. 生成并下载Excel文件
    const dateStr = new Date().toISOString().split('T')[0];
    XLSX.writeFile(workbook, `兔k记账报表-${dateStr}.xlsx`);
  } catch (error) {
    console.error('导出Excel失败:', error);
    await showCustomAlert('导出失败', `发生错误: ${error.message}`);
  }
}

/* --- Excel导出功能结束 --- */

// ▼▼▼ 用这整块新代码，替换旧的 initTukeyAccounting 函数 ▼▼▼
/* --- 兔k记账功能 V2.0 (记账群聊版) --- */
let activeTukeyGroup = null; // 用于存储当前激活的记账群聊数据

/**
 * 【总入口】初始化兔k记账App的所有功能和事件监听
 */
async function initTukeyAccounting() {
  await loadAndRenderTukeyUserSettings();
  // 1. 绑定主屏幕图标点击事件
  document.getElementById('tukey-accounting-app-icon').addEventListener('click', async () => {
    // 打开App时，总是先尝试加载群聊数据
    await loadTukeyGroupData();
    showScreen('tukey-accounting-screen');
  });

  // 2. 绑定底部导航栏事件
  document.getElementById('tukey-bottom-nav').addEventListener('click', e => {
    const navItem = e.target.closest('.tukey-nav-item');
    if (navItem && navItem.dataset.view) {
      const viewId = navItem.dataset.view;
      switchTukeyView(viewId); // 切换视图
      // 如果切换到钱包或群聊视图，则刷新其内容
      if (viewId === 'tukey-wallet-view') renderTukeyWalletView();
      if (viewId === 'tukey-group-chat-view') loadTukeyGroupData();
    }
  });

  // 3. 绑定“创建群聊”按钮
  document.getElementById('tukey-create-group-btn').addEventListener('click', () => {
    openGroupManagerModal();
  });

  // 4. 绑定群聊管理弹窗的“保存”和“取消”按钮
  document.getElementById('tukey-cancel-group-manager-btn').addEventListener('click', () => {
    document.getElementById('tukey-group-manager-modal').classList.remove('visible');
  });
  document.getElementById('tukey-save-group-btn').addEventListener('click', saveTukeyGroup);

  // 5. 绑定群聊内部的“设置”按钮
  document.getElementById('tukey-group-settings-btn').addEventListener('click', openReplySettingsModal);

  // 6. 绑定回复设置弹窗的按钮
  document.getElementById('tukey-cancel-reply-settings-btn').addEventListener('click', () => {
    document.getElementById('tukey-reply-settings-modal').classList.remove('visible');
  });
  document.getElementById('tukey-save-reply-settings-btn').addEventListener('click', saveReplySettings);

  // 7. 绑定回复设置弹窗内的模式切换逻辑
  document.querySelectorAll('input[name="tukey-reply-mode"]').forEach(radio => {
    radio.addEventListener('change', e => {
      const mode = e.target.value;
      document.getElementById('tukey-specific-reply-options').style.display =
        mode === 'random' || mode === 'specific' ? 'block' : 'none';
    });
  });

  // 这是正确的代码
  // 9. 记一笔相关按钮
  document.getElementById('tukey-add-record-btn').addEventListener('click', openRecordEditor);

  // 9. 记一笔弹窗内的“支出/收入”切换
  document.querySelector('.tukey-type-selector').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      document.querySelectorAll('.tukey-type-selector .type-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      renderRecordCategories(e.target.dataset.type);
    }
  });

  // 10.【不要动！】你原有的钱包账户功能事件监听，保持不变
  document.getElementById('add-new-account-fab').addEventListener('click', openAccountTypeSelector);
  document.getElementById('account-type-selection-view').addEventListener('click', e => {
    const typeItem = e.target.closest('.type-item');
    if (typeItem) {
      const category = typeItem.dataset.category;
      const type = typeItem.dataset.type;
      openAccountEditor(null, category, type);
    }
  });
  const accountListEl = document.getElementById('wallet-accounts-list');
  accountListEl.addEventListener('click', e => {
    const item = e.target.closest('.tukey-account-item');
    if (item && item.dataset.accountId) {
      openAccountEditor(parseInt(item.dataset.accountId));
    }
  });
  accountListEl.addEventListener('contextmenu', e => {
    const item = e.target.closest('.tukey-account-item');
    if (item && item.dataset.accountId) {
      e.preventDefault();
      deleteTukeyAccount(parseInt(item.dataset.accountId));
    }
  });
  document.getElementById('cancel-account-editor-btn').addEventListener('click', () => {
    document.getElementById('account-editor-modal').classList.remove('visible');
  });
  document.getElementById('save-account-btn').addEventListener('click', saveTukeyAccount);
  // ▼▼▼ 11. 【全新】绑定设置页面的保存和头像上传 ▼▼▼
  document.getElementById('save-tukey-settings-btn').addEventListener('click', saveTukeyUserSettings);

  document.getElementById('tukey-user-avatar-input').addEventListener('change', async event => {
    const file = event.target.files[0];
    if (file) {
      const dataUrl = await handleImageUploadAndCompress(file); // 复用图片压缩函数
      document.getElementById('tukey-user-avatar-preview').src = dataUrl;
    }
    event.target.value = null;
  });
  // ▼▼▼ 12. 【全新】绑定Excel导出功能相关按钮 ▼▼▼
  document.getElementById('export-tukey-report-btn').addEventListener('click', openTukeyExportModal);

  document.getElementById('cancel-tukey-export-btn').addEventListener('click', () => {
    document.getElementById('tukey-export-modal').classList.remove('visible');
  });

  document.getElementById('confirm-tukey-export-btn').addEventListener('click', exportTukeyReportToExcel);
  // ▲▲▲ 添加结束 ▲▲▲
}

/**
 * 加载群聊数据并渲染主界面
 */
async function loadTukeyGroupData() {
  activeTukeyGroup = await db.tukeyAccountingGroups.get('main_group');
  if (activeTukeyGroup) {
    document.getElementById('tukey-no-group-placeholder').style.display = 'none';
    document.getElementById('tukey-group-chat-container').style.display = 'flex';
    document.getElementById('tukey-group-name').textContent = activeTukeyGroup.name;
    await renderTukeyRecordsList();
  } else {
    document.getElementById('tukey-no-group-placeholder').style.display = 'flex';
    document.getElementById('tukey-group-chat-container').style.display = 'none';
  }
}

/**
 * 打开群聊创建/管理模态框
 */
async function openGroupManagerModal() {
  const modal = document.getElementById('tukey-group-manager-modal');
  const pickerList = document.getElementById('tukey-member-picker-list');
  pickerList.innerHTML = '';

  // 加载所有单聊角色作为备选成员
  const allChars = Object.values(state.chats).filter(c => !c.isGroup);

  if (activeTukeyGroup) {
    // 编辑模式
    document.getElementById('tukey-group-manager-title').textContent = '管理群成员';
    document.getElementById('tukey-group-name-input').value = activeTukeyGroup.name;
    const currentMemberIds = new Set(activeTukeyGroup.members.map(m => m.id));
    allChars.forEach(char => {
      const isChecked = currentMemberIds.has(char.id) ? 'checked' : '';
      pickerList.innerHTML += `
                <label>
                    <input type="checkbox" value="${char.id}" ${isChecked}> ${char.name}
                </label>`;
    });
  } else {
    // 创建模式
    document.getElementById('tukey-group-manager-title').textContent = '创建记账群聊';
    document.getElementById('tukey-group-name-input').value = '';
    allChars.forEach(char => {
      pickerList.innerHTML += `<label><input type="checkbox" value="${char.id}"> ${char.name}</label>`;
    });
  }

  modal.classList.add('visible');
}

/**
 * 保存群聊设置
 */
async function saveTukeyGroup() {
  const name = document.getElementById('tukey-group-name-input').value.trim();
  if (!name) {
    alert('群聊名称不能为空！');
    return;
  }

  const selectedCheckboxes = document.querySelectorAll('#tukey-member-picker-list input:checked');
  if (selectedCheckboxes.length === 0) {
    alert('请至少选择一位群成员！');
    return;
  }

  const members = Array.from(selectedCheckboxes).map(cb => {
    const char = state.chats[cb.value];
    return {
      id: char.id,
      name: char.name,
      persona: char.settings.aiPersona,
      avatar: char.settings.aiAvatar,
    };
  });

  const groupData = {
    id: 'main_group',
    name: name,
    members: members,
    replySettings: activeTukeyGroup?.replySettings || {
      // 保留旧设置或使用默认值
      threshold: 1,
      mode: 'all',
      randomCount: 1,
      specificMemberIds: [],
    },
  };

  await db.tukeyAccountingGroups.put(groupData);
  activeTukeyGroup = groupData;

  document.getElementById('tukey-group-manager-modal').classList.remove('visible');
  await loadTukeyGroupData(); // 重新加载并渲染主界面
}

/**
 * 打开AI回复设置模态框
 */
function openReplySettingsModal() {
  if (!activeTukeyGroup) return;

  const settings = activeTukeyGroup.replySettings;
  document.getElementById('tukey-reply-threshold-input').value = settings.threshold;
  document.querySelector(`input[name="tukey-reply-mode"][value="${settings.mode}"]`).checked = true;

  const specificOptions = document.getElementById('tukey-specific-reply-options');
  specificOptions.style.display = settings.mode === 'random' || settings.mode === 'specific' ? 'block' : 'none';

  document.getElementById('tukey-random-count-input').value = settings.randomCount;

  // 渲染指定成员选择列表
  const specificMemberList = document.getElementById('tukey-specific-member-picker-list');
  specificMemberList.innerHTML = '';
  activeTukeyGroup.members.forEach(member => {
    const isChecked = settings.specificMemberIds.includes(member.id) ? 'checked' : '';
    specificMemberList.innerHTML += `<label><input type="checkbox" value="${member.id}" ${isChecked}> ${member.name}</label>`;
  });

  document.getElementById('tukey-reply-settings-modal').classList.add('visible');
}

/**
 * 保存AI回复设置
 */
async function saveReplySettings() {
  const threshold = parseInt(document.getElementById('tukey-reply-threshold-input').value);
  const mode = document.querySelector('input[name="tukey-reply-mode"]:checked').value;
  const randomCount = parseInt(document.getElementById('tukey-random-count-input').value);
  const specificMemberIds = Array.from(
    document.querySelectorAll('#tukey-specific-member-picker-list input:checked'),
  ).map(cb => cb.value);

  activeTukeyGroup.replySettings = { threshold, mode, randomCount, specificMemberIds };
  await db.tukeyAccountingGroups.put(activeTukeyGroup);

  document.getElementById('tukey-reply-settings-modal').classList.remove('visible');
  alert('回复设置已保存！');
}

// ▼▼▼ 【兔k记账】用这【一整块】全新的代码，替换掉你旧的 openRecordEditor 函数 ▼▼▼

// ▼▼▼ 【兔k记账】用这【一整块】V3版的JS代码，替换旧的 openRecordEditor 和 saveTukeyRecordFromCard 函数 ▼▼▼

/**
 * 【V3版-总入口】打开浮动记账卡片并初始化
 */
async function openRecordEditor() {
  const card = document.getElementById('tukey-record-input-card');
  if (!card) return;

  // 清空旧数据
  document.getElementById('tukey-card-amount-input').value = '';
  document.getElementById('tukey-card-remarks-input').value = '';

  // 【新增】设置时间默认为当前时间
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  document.getElementById('tukey-card-time-input').value = now.toISOString().slice(0, 16);

  // 【新增】渲染账户下拉列表
  const accountSelect = document.getElementById('tukey-card-account-select');
  accountSelect.innerHTML = '';
  const accounts = await db.tukeyAccounts.toArray();
  if (accounts.length === 0) {
    alert('请先在“钱包”页面添加一个账户！');
    return;
  }
  accounts.forEach(acc => {
    accountSelect.innerHTML += `<option value="${acc.id}" data-name="${acc.name}">${acc.name}</option>`;
  });

  // 默认显示支出分类，并重置已选分类
  switchRecordType('expense');
  updateSelectedCategoryDisplay();

  // ---- 事件绑定 (使用克隆节点防止重复绑定) ----
  const typeSelector = card.querySelector('.type-selector');
  const newTypeSelector = typeSelector.cloneNode(true);
  typeSelector.parentNode.replaceChild(newTypeSelector, typeSelector);
  newTypeSelector.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      switchRecordType(e.target.dataset.type);
    }
  });

  const categoryGrid = card.querySelector('.category-grid');
  const newCategoryGrid = categoryGrid.cloneNode(true);
  categoryGrid.parentNode.replaceChild(newCategoryGrid, categoryGrid);
  newCategoryGrid.addEventListener('click', e => {
    const item = e.target.closest('.tukey-category-item');
    if (item) {
      newCategoryGrid.querySelectorAll('.tukey-category-item').forEach(el => el.classList.remove('selected'));
      item.classList.add('selected');
      updateSelectedCategoryDisplay(item.dataset.category, item.querySelector('img').src);
    }
  });

  const closeBtn = card.querySelector('.close-card-btn');
  const newCloseBtn = closeBtn.cloneNode(true);
  closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
  newCloseBtn.addEventListener('click', () => card.classList.remove('visible'));

  const saveBtn = card.querySelector('#tukey-save-from-card-btn');
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
  newSaveBtn.addEventListener('click', saveTukeyRecordFromCard);

  // 显示卡片
  card.classList.add('visible');
  document.getElementById('tukey-card-amount-input').focus();
}

/**
 * 【V3版-辅助】切换支出/收入类型并重新渲染分类
 */
function switchRecordType(type) {
  const card = document.getElementById('tukey-record-input-card');
  card.querySelectorAll('.type-selector .type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });

  const grid = card.querySelector('.category-grid');
  grid.innerHTML = '';
  ACCOUNTING_CATEGORIES[type].forEach(cat => {
    grid.innerHTML += `
            <div class="tukey-category-item" data-type="${type}" data-category="${cat.name}">
                <img src="${cat.icon}" alt="${cat.name}">
                <span>${cat.name}</span>
            </div>
        `;
  });
  // 切换后清空已选分类
  updateSelectedCategoryDisplay();
}

/**
 * 【全新】更新金额输入框旁边已选分类的显示
 */
function updateSelectedCategoryDisplay(categoryName = '请选择分类', iconSrc = '') {
  const displayEl = document.getElementById('tukey-card-selected-category');
  const imgEl = displayEl.querySelector('img');
  const spanEl = displayEl.querySelector('span');

  if (iconSrc) {
    imgEl.src = iconSrc;
    imgEl.style.display = 'inline';
  } else {
    imgEl.style.display = 'none';
  }
  spanEl.textContent = categoryName;
}

/**
 * 【V3版-核心】从记账卡片中读取数据并保存
 */
async function saveTukeyRecordFromCard() {
  const card = document.getElementById('tukey-record-input-card');

  const type = card.querySelector('.type-selector .type-btn.active').dataset.type;
  const selectedCategoryItem = card.querySelector('.tukey-category-item.selected');
  const amount = parseFloat(document.getElementById('tukey-card-amount-input').value);
  const remarks = document.getElementById('tukey-card-remarks-input').value.trim();

  // 【核心修改】从对应的选择器读取账户和时间
  const accountSelect = document.getElementById('tukey-card-account-select');
  const accountId = parseInt(accountSelect.value);
  const accountName = accountSelect.options[accountSelect.selectedIndex].dataset.name;
  const timeValue = document.getElementById('tukey-card-time-input').value;
  const timestamp = timeValue ? new Date(timeValue).getTime() : Date.now();

  if (!selectedCategoryItem) {
    alert('请选择一个分类！');
    return;
  }
  const category = selectedCategoryItem.dataset.category;

  if (isNaN(amount) || amount <= 0) {
    alert('请输入有效的金额！');
    return;
  }

  const newRecord = {
    groupId: activeTukeyGroup.id,
    timestamp,
    type,
    amount,
    category,
    remarks,
    accountId,
    accountName,
    isRepliedTo: false,
  };

  // 【核心修改】更新正确的账户余额
  const account = await db.tukeyAccounts.get(accountId);
  if (account) {
    const currentBalance = parseFloat(account.balance);
    const change = type === 'expense' ? -amount : amount;

    // 特殊处理信用账户和借贷
    const categoryInfo = ACCOUNT_STRUCTURE[account.category];
    if (categoryInfo.isAsset === false) {
      // 信用账户
      account.balance = currentBalance + (type === 'expense' ? amount : -amount);
    } else if (account.type === '借入') {
      account.balance = currentBalance + (type === 'expense' ? -amount : amount);
    } else {
      // 资产账户
      account.balance = currentBalance + change;
    }

    await db.tukeyAccounts.put(account);
  }

  await db.tukeyAccountingRecords.add(newRecord);
  // ▼▼▼ 在这里粘贴下面的新代码 ▼▼▼
  // 【核心】检查同步开关，如果开启，则更新桃宝余额
  if (tukeyUserSettings.syncWithTaobao) {
    const syncAmount = newRecord.type === 'expense' ? -newRecord.amount : newRecord.amount;
    const syncDescription = `[兔k记账同步] ${newRecord.category} - ${newRecord.remarks || '无备注'}`;
    await updateUserBalanceAndLogTransaction(syncAmount, syncDescription);
    console.log(`桃宝余额已同步: ${syncAmount > 0 ? '+' : ''}${syncAmount.toFixed(2)}`);
  }
  // ▲▲▲ 新代码粘贴结束 ▲▲▲

  card.classList.remove('visible'); // 保存后隐藏卡片
  await renderTukeyRecordsList(); // 刷新列表
  await checkAndTriggerAiReply(); // 检查AI回复
}
// ▲▲▲ 替换结束 ▲▲▲

// ▼▼▼ 【兔k记账】用这【一整块】全新的代码，替换掉旧的 renderTukeyRecordsList 和 saveTukeyRecord 函数 ▼▼▼

/**
 * 【重构】渲染记账记录和AI回复列表（气泡模式）
 */
async function renderTukeyRecordsList() {
  const listEl = document.getElementById('tukey-records-list');
  listEl.innerHTML = ''; // 清空
  if (!activeTukeyGroup) return;

  // 获取所有记录并按时间升序排列（旧的在前，新的在后）
  const records = await db.tukeyAccountingRecords.where('groupId').equals(activeTukeyGroup.id).sortBy('timestamp');

  if (records.length === 0) {
    listEl.innerHTML =
      '<p style="text-align:center;color:grey;padding:20px;">还没有记账记录哦，点击右下角“+”开始第一笔吧！</p>';
    return;
  }

  for (const record of records) {
    const recordTime = new Date(record.timestamp);
    const timeString = `${recordTime.getMonth() + 1}-${recordTime.getDate()} ${String(recordTime.getHours()).padStart(
      2,
      '0',
    )}:${String(recordTime.getMinutes()).padStart(2, '0')}`;

    // 找到对应分类的图标
    const categoryData = ACCOUNTING_CATEGORIES[record.type].find(c => c.name === record.category);
    const categoryIcon = categoryData ? categoryData.icon : '';

    // 【核心修改】创建一个新的外层包裹容器
    const userRecordWrapper = document.createElement('div');
    userRecordWrapper.className = 'tukey-record-wrapper user-record'; // 使用新的 wrapper class

    // 创建记账气泡本身
    const recordBubble = document.createElement('div');
    recordBubble.className = `tukey-record-bubble ${record.type}`; // 这里不再需要 user-record class
    recordBubble.innerHTML = `
            <div class="record-header">
                <img src="${categoryIcon}" class="record-category-icon" alt="${record.category}">
                <span class="record-category-name">${record.category}</span>
            </div>
            <div class="record-body">
                <span class="record-remarks">${record.remarks || '无备注'}</span>
                <span class="record-amount">${record.type === 'expense' ? '-' : '+'} ¥${record.amount.toFixed(2)}</span>
            </div>
            <div class="record-footer">
                <span>${record.accountName}</span> · <span>${timeString}</span>
            </div>
        `;

    // 创建头像
    const userAvatarImg = document.createElement('img');
    userAvatarImg.src = tukeyUserSettings.avatar;
    userAvatarImg.className = 'record-user-avatar';
    userAvatarImg.title = tukeyUserSettings.username;

    // 将气泡和头像都添加到新的包裹容器中
    userRecordWrapper.appendChild(recordBubble);
    userRecordWrapper.appendChild(userAvatarImg);

    // 最后将整个包裹容器添加到列表
    listEl.appendChild(userRecordWrapper);

    // 查询并渲染对应的AI回复
    const replies = await db.tukeyAccountingReplies.where('recordId').equals(record.id).toArray();
    if (replies.length > 0) {
      const repliesContainer = document.createElement('div');
      repliesContainer.className = 'tukey-replies-container';

      replies.forEach(reply => {
        const member = activeTukeyGroup.members.find(m => m.id === reply.charId);
        if (member) {
          const replyEl = document.createElement('div');
          replyEl.className = 'tukey-reply-item';
          replyEl.innerHTML = `
                        <img src="${member.avatar}" class="reply-avatar" alt="${member.name}">
                        <div class="reply-content">
                            <div class="reply-sender-name">${member.name}</div>
                            <div class="reply-bubble">${reply.content}</div>
                        </div>
                    `;
          repliesContainer.appendChild(replyEl);
        }
      });
      listEl.appendChild(repliesContainer);
    }
  }
  // 滚动到底部
  listEl.scrollTop = listEl.scrollHeight;
}

// ▼▼▼ 【兔k记账】这是全新的AI回复核心逻辑，请完整粘贴 ▼▼▼

/**
 * 检查是否达到阈值，并触发AI回复
 */
async function checkAndTriggerAiReply() {
  if (!activeTukeyGroup) return;

  const settings = activeTukeyGroup.replySettings;
  // ▼▼▼ 【核心修复】使用 .filter() 来正确查找未回复的记录 ▼▼▼
  const unrepliedRecords = await db.tukeyAccountingRecords
    .where('groupId')
    .equals(activeTukeyGroup.id)
    .filter(record => !record.isRepliedTo) // 这会匹配 isRepliedTo 为 false, undefined 或 null 的所有情况
    .toArray();
  // ▲▲▲ 修复结束 ▲▲▲

  console.log(`[记账AI检查] 未回复记录数: ${unrepliedRecords.length}, 阈值: ${settings.threshold}`);

  // 如果未回复的记录数达到了阈值
  if (unrepliedRecords.length >= settings.threshold) {
    console.log(`[记账AI触发] 达到阈值，准备生成回复...`);
    await triggerAccountingAiResponse(unrepliedRecords);
  }
}

/**
 * 【AI核心】触发记账群聊的AI回复
 * @param {Array} recordsToReply - 需要AI进行评论的账单记录数组
 */
async function triggerAccountingAiResponse(recordsToReply) {
  if (!activeTukeyGroup) return;

  // 显示一个加载提示
  const listEl = document.getElementById('tukey-records-list');
  const loadingEl = document.createElement('div');
  loadingEl.className = 'tukey-reply-item';
  loadingEl.innerHTML = `<div class="reply-bubble">成员们正在赶来的路上...</div>`;
  listEl.appendChild(loadingEl);
  listEl.scrollTop = listEl.scrollHeight;

  const { proxyUrl, apiKey, model, temperature } = state.apiConfig;
  if (!proxyUrl || !apiKey || !model) {
    loadingEl.remove();
    alert('请先在API设置中配置好才能触发AI回复哦！');
    return;
  }

  const settings = activeTukeyGroup.replySettings;
  let membersToReply = [];

  // 根据设置决定哪些成员需要回复
  switch (settings.mode) {
    case 'all':
      membersToReply = activeTukeyGroup.members;
      break;
    case 'random':
      const shuffled = [...activeTukeyGroup.members].sort(() => 0.5 - Math.random());
      membersToReply = shuffled.slice(0, settings.randomCount || 1);
      break;
    case 'specific':
      membersToReply = activeTukeyGroup.members.filter(m => settings.specificMemberIds.includes(m.id));
      break;
  }

  if (membersToReply.length === 0) {
    loadingEl.remove();
    console.warn('[记账AI] 没有找到需要回复的成员。');
    return;
  }

  // 构建给AI的指令 (Prompt)
  const recordsText = recordsToReply
    .map(
      r =>
        `- [${new Date(r.timestamp).toLocaleString()}] ${r.type === 'expense' ? '支出' : '收入'} ${r.amount.toFixed(
          2,
        )}元, 分类: ${r.category}, 备注: ${r.remarks || '无'}`,
    )
    .join('\n');

  // ... 在 triggerAccountingAiResponse 函数内部 ...

  const membersText = membersToReply.map(m => `- ${m.name} (人设: ${m.persona})`).join('\n');

  // ▼▼▼ 用这整块新代码替换旧的 systemPrompt ▼▼▼
  const systemPrompt = `
# 角色
你是一个多角色扮演AI，在一个记账群聊中。

# 用户信息 (这是账单的记录者)
- 用户名: ${tukeyUserSettings.username}
- 职业: ${tukeyUserSettings.profession || '未设定'}

# 任务
群里的用户刚刚记录了以下几笔账单。请你根据下方指定的角色列表及其人设，以及用户的职业信息，为他们每个人生成对这些账单的评论。

# 待评论的账单
${recordsText}

# 你需要扮演的角色 (及人设)
${membersText}

# 回复规则
1.  你的回复【必须严格符合】每个角色的人设。
2.  你的回复可以结合用户的【职业】进行评论，让对话更真实。例如，如果用户是学生，可以说“学生党花钱真大方呀”；如果是白领，可以说“看来这个月工资不错嘛”。
3.  你的回复【必须】是一个JSON数组，每个对象代表一个角色的评论。
4.  【格式铁律】: \`[{"charName": "角色A的名字", "comment": "角色A的评论内容"}, {"charName": "角色B的名字", "comment": "角色B的评论内容"}]\`
5.  评论内容要简短、口语化，像真实的群聊一样。

现在，请开始生成评论。
`;

  try {
    const messagesForApi = [{ role: 'user', content: systemPrompt }];
    let isGemini = proxyUrl === GEMINI_API_URL;
    let geminiConfig = toGeminiRequestData(model, apiKey, systemPrompt, messagesForApi, isGemini, temperature);

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: model,
            messages: messagesForApi,
            temperature: parseFloat(temperature) || 0.8,
            response_format: { type: 'json_object' },
          }),
        });

    if (!response.ok) throw new Error(await response.text());

    const data = await response.json();
    const rawContent = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content)
      .replace(/^```json\s*|```$/g, '')
      .trim();
    const replies = JSON.parse(rawContent);

    if (Array.isArray(replies)) {
      // 为所有被评论的账单都添加这些回复
      for (const record of recordsToReply) {
        for (const reply of replies) {
          const member = activeTukeyGroup.members.find(m => m.name === reply.charName);
          if (member && reply.comment) {
            await db.tukeyAccountingReplies.add({
              recordId: record.id,
              charId: member.id,
              charName: member.name,
              content: reply.comment,
              timestamp: Date.now(),
            });
          }
        }
      }

      // 【关键】将所有已回复的记录标记为 isRepliedTo: true
      const recordIdsToUpdate = recordsToReply.map(r => r.id);
      await db.tukeyAccountingRecords.where('id').anyOf(recordIdsToUpdate).modify({ isRepliedTo: true });

      await renderTukeyRecordsList(); // 重新渲染，显示新回复
    }
  } catch (error) {
    console.error('生成记账回复失败:', error);
    await showCustomAlert('回复生成失败', `发生错误: ${error.message}`);
  } finally {
    // 无论成功失败，都移除加载提示
    loadingEl.remove();
  }
}
// ▲▲▲ 新增AI回复逻辑结束 ▲▲▲
// ▼▼▼ 在你的JS功能区添加下面这些全新的报表功能函数 ▼▼▼

/**
 * 【报表总入口】渲染报表主视图，填充筛选器并显示默认报表
 */
async function renderTukeyReportsView() {
  await populateReportFilters();
  // 默认显示“每日明细”
  document.getElementById('report-type-filter').value = 'daily_details';
  handleReportFilterChange(); // 触发一次渲染
}

/**
 * 【辅助】填充报表的筛选器（账户、月份）
 */
async function populateReportFilters() {
  // 填充账户筛选器
  const accountSelect = document.getElementById('report-account-filter');
  const accounts = await db.tukeyAccounts.toArray();
  accountSelect.innerHTML = '<option value="all">所有账户</option>';
  accounts.forEach(acc => {
    accountSelect.innerHTML += `<option value="${acc.id}">${acc.name}</option>`;
  });

  // 填充月份筛选器
  const monthSelect = document.getElementById('report-month-filter');
  const records = await db.tukeyAccountingRecords.orderBy('timestamp').reverse().toArray();
  const months = new Set();
  records.forEach(rec => {
    const date = new Date(rec.timestamp);
    months.add(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`);
  });

  monthSelect.innerHTML = '';
  months.forEach(month => {
    monthSelect.innerHTML += `<option value="${month}">${month}</option>`;
  });
  // 如果没有记录，给一个默认当前月份
  if (months.size === 0) {
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    monthSelect.innerHTML = `<option value="${currentMonth}">${currentMonth}</option>`;
  }
}

/**
 * 【核心】处理筛选条件变化，并调用相应的报表渲染函数
 */
function handleReportFilterChange() {
  const reportType = document.getElementById('report-type-filter').value;
  const accountId = document.getElementById('report-account-filter').value;
  const monthValue = document.getElementById('report-month-filter').value;

  const dailyView = document.getElementById('daily-report-view');
  const monthlyView = document.getElementById('monthly-report-view');

  if (reportType === 'daily_details') {
    dailyView.style.display = 'block';
    monthlyView.style.display = 'none';
    renderDailyDetailView(accountId === 'all' ? null : parseInt(accountId));
  } else if (reportType === 'monthly_summary') {
    dailyView.style.display = 'none';
    monthlyView.style.display = 'block';
    if (monthValue) {
      const [year, month] = monthValue.split('-');
      renderMonthlySummaryView(parseInt(year), parseInt(month), accountId === 'all' ? null : parseInt(accountId));
    }
  }
}

/**
 * 【渲染】每日明细视图
 */
async function renderDailyDetailView(accountId) {
  const view = document.getElementById('daily-report-view');
  view.innerHTML = '<p class="report-placeholder">正在加载每日明细...</p>';

  let records;
  if (accountId) {
    records = await db.tukeyAccountingRecords.where({ accountId: accountId }).reverse().sortBy('timestamp');
  } else {
    records = await db.tukeyAccountingRecords.reverse().sortBy('timestamp');
  }

  if (records.length === 0) {
    view.innerHTML = '<p class="report-placeholder">没有找到任何记账记录。</p>';
    return;
  }

  // 按天分组
  const recordsByDay = records.reduce((acc, rec) => {
    const day = new Date(rec.timestamp).toISOString().split('T')[0];
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(rec);
    return acc;
  }, {});

  view.innerHTML = ''; // 清空加载提示

  for (const day in recordsByDay) {
    const dayRecords = recordsByDay[day];
    let dailyIncome = 0;
    let dailyExpense = 0;

    let transactionsHtml = '';
    dayRecords.forEach(rec => {
      if (rec.type === 'income') dailyIncome += rec.amount;
      else dailyExpense += rec.amount;

      // 复用记账群聊里的气泡样式
      const categoryData = ACCOUNTING_CATEGORIES[rec.type].find(c => c.name === rec.category);
      const categoryIcon = categoryData ? categoryData.icon : '';
      const recordTime = new Date(rec.timestamp);
      const timeString = `${String(recordTime.getHours()).padStart(2, '0')}:${String(recordTime.getMinutes()).padStart(
        2,
        '0',
      )}`;

      transactionsHtml += `
                <div class="tukey-record-bubble ${rec.type}">
                    <div class="record-header">
                        <img src="${categoryIcon}" class="record-category-icon" alt="${rec.category}">
                        <span class="record-category-name">${rec.category}</span>
                    </div>
                    <div class="record-body">
                        <span class="record-remarks">${rec.remarks || '无备注'}</span>
                        <span class="record-amount">${rec.type === 'expense' ? '-' : '+'} ¥${rec.amount.toFixed(
        2,
      )}</span>
                    </div>
                    <div class="record-footer">
                        <span>${rec.accountName}</span> · <span>${timeString}</span>
                    </div>
                </div>
            `;
    });

    const dayGroup = document.createElement('div');
    dayGroup.className = 'report-day-group';
    dayGroup.innerHTML = `
            <div class="day-header">
                <span class="date">${day}</span>
                <span class="day-summary">
                    <span class="expense">支出: ${dailyExpense.toFixed(2)}</span>
                    <span class="income">收入: ${dailyIncome.toFixed(2)}</span>
                </span>
            </div>
            <div class="transaction-list">${transactionsHtml}</div>
        `;
    view.appendChild(dayGroup);
  }
}

/**
 * 【渲染】月度统计视图
 */
async function renderMonthlySummaryView(year, month, accountId) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59);

  let query = db.tukeyAccountingRecords.where('timestamp').between(startDate.getTime(), endDate.getTime());
  if (accountId) {
    query = query.and(record => record.accountId === accountId);
  }
  const records = await query.toArray();

  // 1. 计算月度总收支
  let totalIncome = 0;
  let totalExpense = 0;
  const expenseByCategory = {};
  const expenseByDay = {};

  records.forEach(rec => {
    if (rec.type === 'income') {
      totalIncome += rec.amount;
    } else {
      totalExpense += rec.amount;
      // 为饼图准备数据
      expenseByCategory[rec.category] = (expenseByCategory[rec.category] || 0) + rec.amount;
      // 为折线图准备数据
      const day = new Date(rec.timestamp).getDate();
      expenseByDay[day] = (expenseByDay[day] || 0) + rec.amount;
    }
  });

  document.getElementById('monthly-summary-card').innerHTML = `
        <div class="summary-item">
            <span class="label">总支出</span>
            <span class="value expense">¥ ${totalExpense.toFixed(2)}</span>
        </div>
        <div class="summary-item">
            <span class="label">总收入</span>
            <span class="value income">¥ ${totalIncome.toFixed(2)}</span>
        </div>
        <div class="summary-item">
            <span class="label">结余</span>
            <span class="value">¥ ${(totalIncome - totalExpense).toFixed(2)}</span>
        </div>
    `;

  // 2. 渲染饼图
  createCategoryPieChart(expenseByCategory);

  // 3. 渲染折线图
  createExpenditureLineChart(expenseByDay, endDate.getDate());
}

/**
 * 【图表】创建支出分类饼图
 */
function createCategoryPieChart(data) {
  const ctx = document.getElementById('category-pie-chart').getContext('2d');
  if (pieChartInstance) {
    pieChartInstance.destroy(); // 销毁旧图表实例
  }
  pieChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                label += new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(context.parsed);
              }
              return label;
            },
          },
        },
      },
    },
  });
}

/**
 * 【图表】创建月度支出折线图
 */
function createExpenditureLineChart(data, daysInMonth) {
  const ctx = document.getElementById('expenditure-line-chart').getContext('2d');
  const labels = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const chartData = labels.map(day => data[day] || 0);

  if (lineChartInstance) {
    lineChartInstance.destroy();
  }
  lineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: '每日支出',
          data: chartData,
          borderColor: '#F44336',
          backgroundColor: 'rgba(244, 67, 54, 0.2)',
          fill: true,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return '¥' + value;
            },
          },
        },
      },
    },
  });
}
// ▲▲▲ 新函数粘贴结束 ▲▲▲

/* --- 兔k记账功能函数结束 --- */
